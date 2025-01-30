import mongoose, { Schema, model } from "mongoose";

import { ServerExpense } from "@/app/database/types/ServerExpense";

const ExpenseSchema = new Schema<ServerExpense>({
  id: { type: String, required: true },
  flatId: { type: String, required: true },
  from: { type: Object, required: true },
  to: { type: [Object], required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
});

const ExpenseModel =
  mongoose.models.Expense || model<ServerExpense>("Expense", ExpenseSchema);

export { ExpenseModel };
