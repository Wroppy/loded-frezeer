import ChoreCycles from "../Enums/ChoreCycles";

type ServerChore = { 
  id: string;
  flatId: string;
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  lastCompleted: Date;
  previousUser: string | null;
  expectedUser: string;
  order: string[];
};


export default ServerChore;