// task-01

let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// task-02

let anything: any = -20;
anything = "Text";
anything = {};

// task-03

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
}

// task-04

let person: [string, number] = ["Max", 21];

// task-05

let unionType: string | number;
let literalType: "enable" | "disable";

// task-06

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// task-07

enum Weekdays {
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
}

function isWeekend(day: Weekdays): boolean {
  return day === Weekdays.Saturday || day === Weekdays.Sunday;
}

// task-08

type Gender = "male" | "female";

const myGender: Gender = "male";

// task-09

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
