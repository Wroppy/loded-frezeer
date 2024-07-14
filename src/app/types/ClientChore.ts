import ChoreCycles from "../Enums/ChoreCycles";

type Chore = {
  id: string;
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  lastCompleted: Date;
  previousUser?: string;
  expectedUser: string;
  nextExpectedUser: string;
  order: string[]
};

export default Chore;