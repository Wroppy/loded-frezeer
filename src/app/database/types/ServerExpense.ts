import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import ClientUser from "@/app/types/ClientUser";

type ServerExpense = {
  id: string; // Unique identifier for the expense
  flatId: string; // The id of the flat the expense belongs to
  payer: ClientUser; // The user who is to pay the expense
  payee: ClientUser; // The user who is to receive the expense
  amount: number;
  description: string; // The description of the expense
  date: Date;
  status: ExpenseStatus; // The status of the expense
};

export { type ServerExpense };
