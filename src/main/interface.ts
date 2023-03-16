interface User {
  readonly _id: number;
  email: string;
  userId: number;
  nickname?: string;
  tell: () => void;
  fullname: (f: string, l: string) => string;
}

const simon: User = {
  _id: 1,
  email: "simon@xxx.com",
  userId: 123,
  tell: () => console.log("I'm Simon"),
  fullname: (firstname: string, lastname: string) => {
    return `${firstname} ${lastname}`;
  },
};

simon.nickname = "SS";

// simon._id = 2 -> error!

simon.tell();
const fullname = simon.fullname("Simon", "Si");

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const admin: Admin = {
  _id: 2,
  role: "admin",
  email: "admin@xxx.com",
  userId: -1,
  tell: () => console.log("I'm Administrator"),
  fullname: (firstname: string, lastname: string) => {
    return `${firstname} ${lastname}`;
  },
};

export {};
