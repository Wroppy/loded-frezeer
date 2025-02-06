import ClientChore from "./ClientChore";
import { ShoppingItem } from "./ShoppingItem";
import UserExpenseSummary from "./UserExpenseSummary";

type GetDashboardBody = {
  email: string;
};

type GetDashboardResponse = {
  success: boolean;
  user: {
    name: string;
  };
  chores: ClientChore[];
  userShoppingList: ShoppingItem[];
  expenses: UserExpenseSummary[];
};

export { type GetDashboardBody, type GetDashboardResponse };
