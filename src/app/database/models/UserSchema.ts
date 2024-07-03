import mongoose, { Schema, model } from "mongoose";
import { User } from "../types/User";

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  userId: { type: String, required: true },
  inFlat: { type: Boolean, required: true },
  setUp: { type: Boolean, required: true },
});

const UserModel = mongoose.models.User || model<User>("User", UserSchema);

export { UserModel };
