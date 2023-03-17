interface Car {
  render: string;
  doors: number;
  getRender: () => string;
  getDoors: () => number;
}

function sale<Car>(car: Car): Car {
  return car;
}

interface DB {
  addr: string;
  port: number;
  username: string;
  password: string;
}

function genericFunction<E, T extends DB>(e: E, t: T): object {
  return {
    e,
    t,
  };
}

genericFunction("Local", {
  addr: "localhost",
  port: 5443,
  username: "postgresql",
  password: "postgresql",
});

export {};
