import ExpenseStatus from "../Enums/ExpenseStatus";
import ClientUser from "./ClientUser";

type ClientExpense = {
  id: string;
  from: ClientUser;
  to: ClientUser;
  amount: number;
  description: string;
  date: Date;
  status: ExpenseStatus;
};

export default ClientExpense;
