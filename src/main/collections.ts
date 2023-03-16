// ######## Arrays
const heros: string[] = ["thor", "spiderman", "ironman"];
const power: Array<number> = [];

import { User } from "./types";
const users: User[] = [];

const message: [string, number, boolean] = ["success", 200, false];

const MLnumbers: number[][] = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];

heros.push("supperman");
console.log("After push: " + heros);

users.push({
  _id: "1",
  name: "Amy",
  email: "amy@xxx.com",
  isActive: false,
  nickname: "Ketty",
});

heros.map((hero) => {
  return `hero is ${hero.toUpperCase()}`;
});

export {};
