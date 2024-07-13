import ChoreCycles from "../Enums/ChoreCycles";

type Chore = {
  id: string;
  name: string;
  description: string;
  expectedCycle: ChoreCycles;
  lastCompleted: Date;
  expectedUser: string;
  nextExpectedUser: string;
};

export default Chore;