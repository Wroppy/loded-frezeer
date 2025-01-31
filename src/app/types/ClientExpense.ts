import ExpenseStatus from "../Enums/ExpenseStatus";
import ClientUser from "./ClientUser";

type ClientExpense = {
  id: string;
  payee: ClientUser;
  payer: ClientUser;
  amount: number;
  description: string;
  date: Date;
  status: ExpenseStatus;
};

export default ClientExpense;
