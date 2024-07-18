import ClientUser from "./ClientUser";

type Expense = {
  id: string;
  from: ClientUser;
  to: ClientUser;
  amount: number;
  description: string;
  date: Date;
}

export default Expense;

