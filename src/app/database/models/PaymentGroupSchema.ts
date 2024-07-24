import PaymentGroup from "@/app/types/PaymentGroup";
import mongoose, { Schema, model } from "mongoose";

const PaymentGroupSchema = new Schema<PaymentGroup>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  users: { type: [Object], required: true },
});

const PaymentGroupModel =
  mongoose.models.PaymentGroup ||
  model<PaymentGroup>("PaymentGroup", PaymentGroupSchema);

export { PaymentGroupModel };
