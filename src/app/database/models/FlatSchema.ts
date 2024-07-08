import mongoose, { Schema, model } from "mongoose";
import { Flat } from "../types/Flat";

const FlatSchema = new Schema<Flat>({
  tenants: {
    type: [String],
    required: true,
  },
  joinId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  flatId: {
    type: String,
    required: true,
  },
  shoppingList: {
    type: [Object],
    required: true,
  },
});

const FlatModel = mongoose.models.Flat || model<Flat>("Flat", FlatSchema);

export { FlatModel };
