import mongoose, { connect } from "mongoose";
import { UserModel } from "./models/UserSchema";
import {
  FlatTemplate,
  UserTemplate,
  ChoreTemplate,
  PaymentGroupTemplate,
  ServerExpenseTemplate,
} from "./models/ModelTemplates";
import { comparePassword, hashPassword, copyObject } from "./Utils";
import { User } from "./types/User";
import { Flat } from "./types/Flat";
import { FlatModel } from "./models/FlatSchema";
import { ShoppingItem } from "../types/ShoppingItem";
import { ShoppingListPageProps } from "../types/ShoppingListPageProps";
import ClientUser from "../types/ClientUser";
import { ChoreModel } from "./models/ChoreSchema";
import ChoreCycles from "../Enums/ChoreCycles";
import ServerChore from "../types/ServerChore";
import ClientChore from "../types/ClientChore";
import BareBonesChore from "../types/BareBonesChore";
import { PaymentGroupModel } from "./models/PaymentGroupSchema";
import PaymentGroup from "../types/PaymentGroup";
import { ExpenseModel } from "./models/ExpenseSchema";

export default class DatabaseManager {
  constructor() {
    this.connectToDb();
  }

  private async connectToDb() {
    await connect(process.env.MONGODB_URL as string, {
      dbName: process.env.DATABASE,
    });
  }

  public async createUser(name: string, email: string, password: string) {
    try {
      // Hashes the password before saving it to the database
      const hashedPassword = await hashPassword(password);
      const userTemplate = UserTemplate(name, email, hashedPassword);
      const user = new UserModel(userTemplate);
      await user.save();
      return user;
    } catch (error) {
      let code = (error as unknown as any).code;
      // Checks if the error is a duplicate key error
      if (code === 11000) {
        throw new Error("Email already in use");
      } else {
        throw new Error("Error creating user");
      }
    }
  }

  /**
   * Returns true or false if the user is valid
   *
   * @param email the email of the user
   * @param password the password of the user
   * @returns true if the user is valid, false otherwise
   */
  public async isUserValid(email: string, password: string): Promise<boolean> {
    const user = (await UserModel.findOne({ email })) as User;
    if (!user) {
      return false;
    }

    return await comparePassword(password, user.password);
  }

  /**
   * Given an email, returns the user
   *
   * @param email the email of the user
   * @returns the user
   */
  public async getUser(email: string): Promise<User | null> {
    return await UserModel.findOne({ email });
  }

  /**
   * Given an email, returns the flat the user is in
   *
   * @param email the email of the user
   * @returns the flat the user is in
   */
  private async getUserFlat(email: string): Promise<Flat | null> {
    const flats = (await FlatModel.find()) as Flat[];

    let userFlat: Flat | null = null;
    // Loops through all the flats and checks if the user is in the flat
    for (let flat of flats) {
      if (flat.tenants.includes(email)) {
        userFlat = flat;
      }
    }

    return userFlat;
  }

  /**
   * Given an email, returns the flat the user is in with the tenants as a list of names
   * instead of emails
   *
   * getUserFlat(email:string) should only be used in the backend
   *
   * @param email the email of the user
   * @returns the flat the user is in
   */
  public async getUserFlatClient(email: string): Promise<Flat | null> {
    let userFlat = await this.getUserFlat(email);

    if (!userFlat) {
      return null;
    }

    // Gets the names of the tenants
    let tenants: { [key: string]: string } = {};
    for (let tenantEmail of userFlat!.tenants) {
      let user = await this.getUser(tenantEmail);
      tenants[tenantEmail] = user!.name;
    }

    // Copies the flat object and changes the tenants to names
    let flat = JSON.parse(JSON.stringify(userFlat));
    flat.tenants = Object.values(tenants);

    // Changes the bought by and added by to names
    for (let item of flat.shoppingList) {
      if (item.boughtBy) {
        item.boughtBy = tenants[item.boughtBy];
      }

      if (item.addedBy) {
        item.addedBy = tenants[item.addedBy];
      }
    }

    return flat;
  }

  /**
   * Given an email and a flat name, creates a new flat
   * and adds the user to the flat
   *
   * @param name the name of the flat
   * @param email the email of the user
   * @returns the flat
   */
  public async createFlat(name: string, email: string): Promise<Flat> {
    const flatTemplate = FlatTemplate(name, email);
    const flat = new FlatModel(flatTemplate);
    await flat.save();

    return (await this.getUserFlat(email))!;
  }

  /**
   * Given an email and a flat join code, adds the user to the flat
   *
   * @param email the email of the user
   * @param flatJoinCode the flat join code
   * @returns the flat
   */
  public async joinFlat(email: string, flatJoinCode: string): Promise<Flat> {
    const flat = (await FlatModel.findOne({ joinId: flatJoinCode })) as Flat;

    if (!flat) {
      throw new Error("Invalid flat join code");
    }

    flat.tenants.push(email);
    await (flat as any).save();

    return (await this.getUserFlat(email))!;
  }

  public async addShoppingItem(email: string, shoppingItem: ShoppingItem) {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    flat.shoppingList.push(shoppingItem);
    await (flat as any).save();
  }

  public async getShoppingPageProps(
    email: string
  ): Promise<ShoppingListPageProps> {
    const flat = await this.getUserFlatClient(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    return {
      shoppingList: flat.shoppingList,
      names: flat.tenants,
      email,
    };
  }

  /**
   * Given an email and a list of checked items, sets the items as purchased
   * in the flat
   */
  public async setPurchased(email: string, checkedItems: string[]) {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }
    console.log(checkedItems);
    // Loops through all the items in the shopping list and sets the boughtBy
    for (let item of flat.shoppingList) {
      if (checkedItems.includes(item.id)) {
        item.boughtBy = email;
      }
    }
    await (flat as any).markModified("shoppingList");
    await (flat as any).save();
  }

  /**
   * Given an email, a shopping item id, and new values, updates the shopping item
   * in the flat
   *
   * @param email the email of the user
   * @param id the id of the shopping item
   * @param newItemName the new name of the shopping item
   * @param newItemQuantity the new quantity of the shopping item
   * @param newItemFor the new list of tenants the shopping item is for
   * @returns the updated shopping item
   */
  public async updateShoppingItem(
    email: string,
    id: string,
    newItemName: string,
    newItemQuantity: number,
    newItemFor: string[]
  ): Promise<ShoppingItem> {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    for (let item of flat.shoppingList) {
      // Finds the item with the id and updates it
      if (item.id !== id) {
        continue;
      }

      // Checks that the item is not already bought
      if (item.boughtBy) {
        throw new Error("Item is already bought");
      }

      // Checks that the user is the one who added the item
      if (item.addedBy !== email) {
        throw new Error("User did not add the item");
      }

      // Updates the item
      item.itemName = newItemName;
      item.quantity = newItemQuantity;
      item.itemFor = newItemFor;

      await (flat as any).markModified("shoppingList");
      await (flat as any).save();
      return copyObject(item);
    }

    throw new Error("Item not found");
  }

  /**
   * Given an email and a shopping item id, deletes the shopping item
   * in the flat
   *
   * @param email the email of the user
   * @param id the id of the shopping item
   * @returns the deleted shopping item
   */
  public async deleteShoppingItem(email: string, id: string) {
    // Gets the flat the user is in
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    // Loops through all the items in the shopping list and deletes the item
    for (let i = 0; i < flat.shoppingList.length; i++) {
      if (flat.shoppingList[i].id !== id) {
        continue;
      }

      flat.shoppingList.splice(i, 1);

      await (flat as any).markModified("shoppingList");
      await (flat as any).save();
      return;
    }

    // Items is not found, so throws an error
    throw new Error("Item not found");
  }

  /**
   * Given an email, returns the tenants of the flat the user is in
   */
  public async getFlatTenants(email: string): Promise<ClientUser[]> {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    let tenants: ClientUser[] = [];

    for (let tenant of flat.tenants) {
      let user = await this.getUser(tenant);
      tenants.push({
        name: user!.name,
        email: user!.email,
      });
    }

    return tenants;
  }

  /**
   * Given an email, returns the client user object
   *
   * @param email the email of the user
   * @returns the client user object
   */
  public async getClientUser(email: string): Promise<ClientUser> {
    const user = await this.getUser(email);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      name: user.name,
      email: user.email,
    };
  }

  /**
   * Given an email, name, description, expected cycle, starting user, and order, creates a new chore in the database
   * and returns the chore
   *
   * @param email the email of the user
   * @param name the name of the chore
   * @param description the description of the chore
   * @param expectedCycle the expected cycle of the chore
   * @param expectedUser the expected user of the chore
   * @param order the order of the chore
   * @returns the chore
   *
   */
  public async createChore(
    email: string,
    name: string,
    description: string,
    expectedCycle: ChoreCycles,
    expectedUser: string,
    order: string[]
  ) {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    // Checks that the expected user is in the flat
    if (!flat.tenants.includes(expectedUser)) {
      throw new Error("Expected user is not in the flat");
    }

    // Checks that the order is not empty
    if (order.length === 0) {
      throw new Error("Order cannot be empty");
    }

    // Checks that all users in the order are in the flat
    for (let user of order) {
      if (!flat.tenants.includes(user)) {
        throw new Error("User in order is not in the flat");
      }
    }

    const choreTemplate = ChoreTemplate(
      flat.flatId,
      name,
      description,
      expectedCycle,
      expectedUser,
      order
    );
    const chore = new ChoreModel(choreTemplate);
    await chore.save();
    return chore;
  }

  /**
   * Given an email, returns the chores of the flat the user is in
   */
  public async getServerChores(email: string): Promise<ServerChore[]> {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    const chores = (await ChoreModel.find({
      flatId: flat.flatId,
    })) as ServerChore[];

    return chores;
  }

  /**
   * Given an email, returns the chores of the flat the user is in
   * with the names of the users instead of emails
   *
   * @param email the email of the user requesting the chores
   * @returns  the chores of the flat the user is in
   */
  public async getClientChores(email: string): Promise<ClientChore[]> {
    const chores = await this.getServerChores(email);
    let clientChores: ClientChore[] = [];

    for (let chore of chores) {
      let order: ClientUser[] = [];

      // Gets the names of the users in the order of the chore and adds them to the order
      for (let user of chore.order) {
        let userObj = await this.getUser(user);
        order.push({
          name: userObj!.name,
          email: userObj!.email,
        });
      }

      let expectedUserObj = await this.getUser(chore.expectedUser);

      clientChores.push({
        id: chore.id,
        name: chore.name,
        description: chore.description,
        expectedCycle: chore.expectedCycle,
        lastCompleted: chore.lastCompleted,
        previousUser: chore.previousUser,
        expectedUser: expectedUserObj!.name,
        nextExpectedUser: (await this.getNextExpectedChoreUser(chore)).name,
        order,
      });
    }

    return clientChores;
  }

  /**
   * Given the chore gets the next expected user
   * @param chore the chore
   * @returns the name of the next expected user
   */
  private async getNextExpectedChoreUser(
    chore: ServerChore
  ): Promise<ClientUser> {
    // Adds 1 to the index of the expected user in the order
    let expectedUserIndex = chore.order.indexOf(chore.expectedUser);
    let nextExpectedUserIndex = (expectedUserIndex + 1) % chore.order.length;
    const email = chore.order[nextExpectedUserIndex];
    const user = await this.getUser(email);
    return { name: user!.name, email: user!.email };
  }

  /**
   * Given an email and a chore id, deletes the chore
   * in the flat
   *
   * @param email the email of the user
   * @param id the id of the chore
   */
  public async deleteChore(email: string, id: string) {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    const chore = await ChoreModel.findOne({
      id,
    });

    if (!chore) {
      throw new Error("Chore not found");
    }

    if (chore.flatId !== flat.flatId) {
      throw new Error("Chore not in flat");
    }

    ChoreModel.findOneAndDelete({ id }).exec();
  }

  /**
   * Given an email and a chore id, completes the chore
   * in the flat
   *
   * @param email the email of the user
   * @param id the id of the chore
   * @returns the updated chore
   */
  public async completeChore(
    email: string,
    id: string
  ): Promise<{ chore: ServerChore; nextExpected: string; expected: string }> {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    const chore = (await ChoreModel.findOne({
      id,
    })) as ServerChore;

    if (!chore) {
      throw new Error("Chore not found");
    }

    if (chore.flatId !== flat.flatId) {
      throw new Error("Chore not in flat");
    }

    // Gets the next expected user
    let nextExpectedUser = await this.getNextExpectedChoreUser(chore);

    const previousUser = await this.getUser(chore.expectedUser);

    // Updates the chore
    chore.previousUser = previousUser!.name;
    chore.expectedUser = nextExpectedUser.email;
    chore.lastCompleted = new Date();

    await (chore as any).save();

    // Gets the new next expected user
    let nextExpected = await this.getNextExpectedChoreUser(chore);
    return {
      chore,
      nextExpected: nextExpected.name,
      expected: nextExpectedUser.name,
    };
  }

  public async getChore(email: string, choreId: string): Promise<ClientChore> {
    const chores = await this.getClientChores(email);
    console.log("testing", choreId);
    console.log(chores);
    for (let chore of chores) {
      if (chore.id === choreId) {
        return chore;
      }
    }

    throw new Error("Chore not found");
  }

  public async editChore(
    email: string,
    id: string,
    bareBonesChore: BareBonesChore
  ) {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    const chore = await ChoreModel.findOne({
      id,
    });

    if (!chore) {
      throw new Error("Chore not found");
    }

    if (chore.flatId !== flat.flatId) {
      throw new Error("Chore not in flat");
    }

    // Checks that the expected user is in the flat
    if (!flat.tenants.includes(bareBonesChore.expectedUser)) {
      throw new Error("Expected user is not in the flat");
    }

    // Checks that the order is not empty
    if (bareBonesChore.order.length === 0) {
      throw new Error("Order cannot be empty");
    }

    // Checks that all users in the order are in the flat
    for (let user of bareBonesChore.order) {
      if (!flat.tenants.includes(user.email)) {
        throw new Error("User in order is not in the flat");
      }
    }

    chore.name = bareBonesChore.name;
    chore.description = bareBonesChore.description;
    chore.expectedCycle = bareBonesChore.expectedCycle;
    chore.expectedUser = bareBonesChore.expectedUser;
    chore.order = bareBonesChore.order.map((user) => user.email);

    await (chore as any).markModified("order");
    await (chore as any).save();
  }

  public async addPaymentGroup(
    email: string,
    name: string,
    users: ClientUser[]
  ) {
    if (users.length === 0) {
      throw new Error("Payment group must have users");
    }

    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    // Checks that all users in the payment group are in the flat
    for (let user of users) {
      if (!flat.tenants.includes(user.email)) {
        throw new Error("User in payment group is not in the flat");
      }
    }

    const paymentGroup = PaymentGroupTemplate(name, users);
    const group = new PaymentGroupModel(paymentGroup);

    await group.save();
  }

  public async getPaymentGroups(email: string): Promise<PaymentGroup[]> {
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    const groups = (await PaymentGroupModel.find()) as PaymentGroup[];

    let userGroups: PaymentGroup[] = [];

    for (let group of groups) {
      for (let user of group.users) {
        if (user.email === email) {
          userGroups.push({
            name: group.name,
            users: group.users,
            id: group.id,
          });
          break;
        }
      }
    }

    return userGroups;
  }

  public async editPaymentGroup(
    id: string,
    name: string,
    users: ClientUser[],
    email: string
  ) {
    // Validates that the user is in a flat
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    // Checks that all users in the payment group are in the flat
    for (let user of users) {
      if (!flat.tenants.includes(user.email)) {
        throw new Error("User in payment group is not in the flat");
      }
    }

    // Finds the payment group
    const group = await PaymentGroupModel.findOne({ id });

    if (!group) {
      throw new Error("Payment group not found");
    }

    // Checks that the user is in the payment group
    let userInGroup = false;
    for (let user of group.users) {
      if (user.email === email) {
        userInGroup = true;
        break;
      }
    }

    if (!userInGroup) {
      throw new Error("User not in payment group");
    }

    // Updates the payment group
    group.name = name;
    group.users = users;
    await (group as any).markModified("users");
    await (group as any).save();
  }

  public async deletePaymentGroup(id: string, email: string) {
    // Validates that the user is in a flat
    const flat = await this.getUserFlat(email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }

    // Finds the payment group
    const group = await PaymentGroupModel.findOne({ id });

    if (!group) {
      throw new Error("Payment group not found");
    }

    // Checks that the user is in the payment group
    let userInGroup = false;
    for (let user of group.users) {
      if (user.email === email) {
        userInGroup = true;
        break;
      }
    }

    if (!userInGroup) {
      throw new Error("User not in payment group");
    }

    // Deletes the payment group
    PaymentGroupModel.findOneAndDelete({ id }).exec();
  }

  public async createExpense(
    from: ClientUser,
    to: ClientUser[],
    amount: number,
    description: string
  ) {
    const flat = await this.getUserFlat(from.email);

    if (!flat) {
      throw new Error("User is not in a flat");
    }
    
    const flatId = flat.flatId;

    // Checks that the users in the expense are in the flat
    for (let user of to) {
      if (!flat.tenants.includes(user.email)) {
        throw new Error("User in expense is not in the flat");
      }
    }

    // Creates the expense
    const expense = ServerExpenseTemplate(
      from,
      to,
      amount,
      description,
      new Date(),
      flatId
    );
    console.log("hay");
    // Saves the expense
    const mongoExpense = new ExpenseModel(expense);
    await mongoExpense.save();
  }
}
