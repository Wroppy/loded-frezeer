import ClientUser from "./ClientUser";

type PaymentGroup = {
  id: string;
  name: string;
  users: ClientUser[];
};

export default PaymentGroup;
