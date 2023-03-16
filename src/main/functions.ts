// defind a simple function

function sumTwo(a: number, b: number): number {
  return a + b;
}

function getUpper(s: string) {
  return s.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

var loginUser = (name: string, email: string, isPaid: boolean = false) => {};

sumTwo(2, 3);
getUpper("Simon");
signUpUser("Simon", "simon@xxx.com", false);
loginUser("Simon", "simon@xxx.com");

const getHello = (s: string): string => {
  return "Hello " + s;
};

console.log(getHello("Simon"));

// throw an exception
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

// return an object
function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 688 };
}

console.log(createCourse().name);

// parameter is type and return is type
import { User } from "./types";
function createUser(user: User): User {
  console.log("User is activing...");
  user.isActive = true;
  return user;
}

console.log(
  createUser({
    _id: "1",
    name: "Simon",
    email: "simon@xxx.com",
    isActive: false,
  })
);

function getId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  }
  return "" + id;
}

export {};
