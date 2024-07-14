import ChoreCycles from "../Enums/ChoreCycles";
import ClientUser from "./ClientUser";

type BareBonesChore = {
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  expectedUser: string;
  order: ClientUser[];
};

export default BareBonesChore;