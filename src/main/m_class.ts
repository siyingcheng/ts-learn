class User {
  email: string;
  name: string;
  private _age?: number;
  readonly city: string = "ChengDu";
  private _code?: string;
  constructor(email: string, name: string, age?: number) {
    this.email = email;
    this.name = name;
    this._age = age;
  }

  get getAge(): number | undefined {
    return this._age;
  }

  set setCode(code: string) {
    this._code = code.toUpperCase();
  }
  get getCode(): string {
    return this._code ? this._code : "";
  }
}

class User2 {
  private _age?: number;
  readonly city: string = "ChengDu";
  // you can define public attributes in constructor
  constructor(public email: string, public name: string, age?: number) {
    this.email = email;
    this.name = name;
    this._age = age;
  }
}

class UserInfo extends User {
  firstname: string;
  lastname: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    name: string,
    age?: number
  ) {
    super(email, name, age);
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const simon = new User("simon@xxx.com", "Simon", 35);
simon.setCode = "wNv222";
console.log(simon.city);
console.log(simon.getAge);
console.log(simon.getCode);
const simon2 = new User2("simon@xxx.com", "Simon2");

// class implements interface(s)
interface TakePhoto {
  title: string;
  size: number;
  type: string;
}

interface Story {
  createStory(): void;
}

class Wibo implements TakePhoto {
  constructor(public title: string, public size: number, public type: string) {}
}

class Bilibili implements TakePhoto, Story {
  constructor(public title: string, public size: number, public type: string) {}

  createStory(): void {
    // TBD
  }
}

// abstract class
abstract class Car {
  constructor(public render: string, public doors: number) {}

  abstract run(): void;
}

// const myCar = new Car("BYD", 4) -> error

class BYD extends Car {
  constructor(public color: string, public doors: number) {
    super("BYD", doors);
  }

  run(): void {
    console.log("BYD is running...");
  }
}

export {};
