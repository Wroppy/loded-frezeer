import ChoreCycles from "../Enums/ChoreCycles";
import ClientUser from "./ClientUser";

type ClientChore = {
  id: string;
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  lastCompleted: Date; 
  previousUser?: string | null; // Name
  expectedUser: string; // Name 
  nextExpectedUser: string; // Name
  order: ClientUser[];
};

export default ClientChore;
