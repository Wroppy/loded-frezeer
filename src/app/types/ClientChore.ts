import ChoreCycles from "../Enums/ChoreCycles";
import User from "./ClientUser";

type Chore = {
  id: string;
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  lastCompleted: Date;
  previousUser?: string;
  expectedUser: string;
  nextExpectedUser: string;
  order: User[];
};

export default Chore;
