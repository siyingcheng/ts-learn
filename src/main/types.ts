// Define a type

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  nickname?: string; // `?` means this attribute is optional
};

// union type
type cardNumber = {
  id: string;
};

type cardDate = {
  date: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let card: cardDetails = {
  id: "123",
  date: "2023-03-16",
  cvv: 123456,
};

console.log(card);

export { User };
