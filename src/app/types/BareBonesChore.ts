import ChoreCycles from "../Enums/ChoreCycles";
import User from "./ClientUser";

type BareBonesChore = {
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  expectedUser: string;
  order: User[];
};

export default BareBonesChore;