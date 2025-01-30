import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import ClientUser from "@/app/types/ClientUser";

type ServerExpense = {
  id: string; // Unique identifier for the expense
  flatId: string; // The id of the flat the expense belongs to
  from: ClientUser; // The id of the user who paid the expense
  to: ClientUser[];
  amount: number;
  description: string; // The description of the expense
  date: Date;
  status: ExpenseStatus; // The status of the expense
};

export { type ServerExpense };
