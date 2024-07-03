import mongoose, { connect } from "mongoose";
import { UserModel } from "./models/UserSchema";
import { UserTemplate } from "./models/ModelTemplates";
import { hashPassword } from "./Utils";

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
      const hashedPassword = await hashPassword(password);
      const userTemplate = UserTemplate(name, email, hashedPassword);
      const user = new UserModel(userTemplate);
      await user.save();
      return user;
    } catch (error) {
      let code = ((error as unknown) as any ).code;
      // Checks if the error is a duplicate key error
      if (code === 11000) {
        throw new Error("Email already in use");
      } else {
        throw new Error("Error creating user");
      }
    }
  }
}
