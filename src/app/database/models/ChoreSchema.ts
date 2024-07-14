import ServerChore from "@/app/types/ServerChore";
import mongoose, { Schema, model } from "mongoose";

const ChoreSchema = new Schema<ServerChore>({
  id: { type: String, required: true },
  flatId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  expectedCycle: { type: String, required: true },
  lastCompleted: { type: Date, required: true },
  previousUser: { type: String, required: false },
  expectedUser: { type: String, required: true },
  order: { type: [String], required: true },
});

const ChoreModel =
  mongoose.models.Chore || model<ServerChore>("Chore", ChoreSchema);

export { ChoreModel };
