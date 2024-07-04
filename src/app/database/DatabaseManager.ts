import mongoose, { connect } from "mongoose";
import { UserModel } from "./models/UserSchema";
import { FlatTemplate, UserTemplate } from "./models/ModelTemplates";
import { comparePassword, hashPassword } from "./Utils";
import { User } from "./types/User";
import { Flat } from "./types/Flat";
import { FlatModel } from "./models/FlatSchema";

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
  public async getUserFlat(email: string): Promise<Flat | null> {
    const flats = (await FlatModel.find()) as Flat[];

    let userFlat: Flat = null as any;
    // Loops through all the flats and checks if the user is in the flat
    for (let flat of flats) {
      if (flat.tenants.includes(email)) {
        userFlat = flat;
      }
    }

    if (!userFlat) {
      return null;
    }

    // Changes the tenants array to include the names of the tenants
    let tenants: string[] = [];
    for (let tenant of userFlat.tenants) {
      const user = await this.getUser(tenant);
      tenants.push(user?.name as string);
    }

    userFlat.tenants = tenants;

    return userFlat;
  }

  /**
   * Given an email and a flat name, creates a new flat
   * and adds the user to the flat
   *
   * @param email the email of the user
   * @param name the name of the flat
   * @returns the flat
   */
  public async createFlat(name: string, email: string): Promise<Flat> {
    const flatTemplate = FlatTemplate(name, email);
    const flat = new FlatModel(flatTemplate);
    await flat.save();

    return (await this.getUserFlat(email))!;
  }
}
