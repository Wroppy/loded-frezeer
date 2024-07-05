import { Flat } from "../database/types/Flat";

type JoinFlatResponse = {
  error: string | null;
  flat: Flat | null;
};

export { type JoinFlatResponse };
