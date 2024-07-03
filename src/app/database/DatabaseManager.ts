import mongoose, {connect } from "mongoose";
import { UserModel } from "./models/UserSchema";

export default class DatabaseManager {
  constructor() {
    this.connectToDb();
  }

  private async connectToDb() {
    await connect(process.env.MONGODB_URL as string, {
      dbName: process.env.DATABASE,
    });
  }
}
