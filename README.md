<h1 id="home">Homework :clipboard:</h1>

## ts-hw-module-1

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

## Basic types

The goal of this homework is to solidify your skills in working with basic TypeScript types. You will work with types such as number, string, boolean, null, undefined, unknown, any, as well as tuples, enums, and unions of types.

At the end of the homework, you will also practice creating your own type based on existing objects. This will help you better understand how TypeScript can be used to ensure the typical security of your data and improve the quality of your code.

### Task 1

There is the following JavaScript code:

```ts
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
  return 100 + a;
};
```

Convert this code to TypeScript by specifying the appropriate types for all variables.

### Task 2

A JavaScript variable can hold any type of value:

```ts
let anything = -20;
anything = "Text";
anything = {};
```

What type do you assign to an anything variable in TypeScript to keep it flexible?

### Task 3

In TypeScript, the unknown type allows us to store any values, but we can assign an unknown variable directly to another variable if we are sure of its type. You have the following code:

```ts
let some: unknown;
some = "Text";
let str: string;
str = some;
```

What needs to be fixed in this code to make it correct and safe?

### Task 4

You have the following JavaScript array:

```ts
let person = ["Max", 21];
```

How do I rewrite it in TypeScript using the concept of tuples to ensure that the first element is always a string and the second a number?

### Task 5

How do you define a variable in TypeScript that can accept a string or a number (union type)? And in the same way, define a variable that can take only one of two string values: 'enable' or 'disable' (literal type)?

### Task 6

You have the following JavaScript functions:

```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
```

How do you specify the types for the arguments and return values ​​of these functions?

### Task 7

Create a function (isWeekend) that takes the day of the week (from your enum) and returns a boolean value indicating whether it is a weekday or a weekend.

### Task 8

Create a "Gender" type using a union type that can contain the values ​​"male", "female". Create a myGender variable of this type.

### Task 9

You have two objects:

```ts
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
```

Create a new data type that fits these two objects.

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

## Базові типи

Метою цього домашнього завдання є закріплення ваших навичок роботи з базовими типами TypeScript. Ви будете працювати з типами, такими як number, string, boolean, null, undefined, unknown, any, а також кортежами, переліками (enum) та об'єднаннями типів.

В кінці домашнього завдання ви також попрактикуєтеся у створенні свого типу на основі наявних об'єктів. Це допоможе вам краще зрозуміти, як TypeScript може бути використаний для забезпечення типової безпеки ваших даних та підвищення якості вашого коду.

### Завдання 1

Є наступний JavaScript код:

```ts
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
  return 100 + a;
};
```

Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

### Завдання 2

JavaScript змінна може зберігати значення будь-якого типу:

```ts
let anything = -20;
anything = "Text";
anything = {};
```

Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

### Завдання 3

У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. У вас є наступний код:

```ts
let some: unknown;
some = "Text";
let str: string;
str = some;
```

Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

### Завдання 4

У вас є наступний JavaScript масив:

```ts
let person = ["Max", 21];
```

Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?

### Завдання 5

Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?

### Завдання 6

У вас є такі функції JavaScript:

```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
```

Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

### Завдання 7

Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

### Завдання 8

Створіть тип "Gender", використовуючи union type, який може містити значення "male", "female". Створіть змінну myGender цього типу.

### Завдання 9

У вас є два об'єкти:

```ts
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
```

Створіть новий тип даних, який підходить для цих двох об'єктів.

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

## Базовые типы

Целью этой домашней задачи является закрепление ваших навыков работы с базовыми типами TypeScript. Вы будете работать с типами, такими как number, string, boolean, null, undefined, unknown, any, а также кортежами, списками (enum) и объединениями типов.

В конце домашнего задания вы также попрактикуетесь в создании своего типа на основе имеющихся объектов. Это поможет вам лучше понять, как TypeScript может быть использован для обеспечения типичной безопасности ваших данных и повышения качества вашего кода.

### Задание 1

Есть следующий JavaScript код:

```ts
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
  return 100 + a;
};
```

Превратите этот код в TypeScript, указав соответствующие типы для всех переменных.

### Задание 2

JavaScript переменная может сохранять значения любого типа:

```ts
let anything = -20;
anything = "Text";
anything = {};
```

Какой тип вы придаете переменной anything в TypeScript, чтобы сохранить ее гибкость?

### Задание 3

В TypeScript тип unknown позволяет нам сохранять любые значения, но мы можем присвоить unknown переменную непосредственно другой переменной, если мы уверены в ее типе. У вас есть следующий код:

```ts
let some: unknown;
some = "Text";
let str: string;
str = some;
```

Что нужно исправить в этом коде, чтобы он стал правильным и безопасным?

### Задание 4

У вас есть следующий JavaScript массив:

```ts
let person = ["Max", 21];
```

Как переписать его в TypeScript, используя концепцию кортежей, чтобы гарантировать, что первый элемент всегда будет строчкой, а второй числом?

### Задание 5

Как вы определите переменную в TypeScript, которая может принимать строчку или число (union type)? И так же определите переменную, которая может принимать только одно из двух строчных значений: 'enable' или 'disable' (literal type)?

### Задание 6

У вас есть следующие функции JavaScript:

```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
```

Как вы укажете типы для возвращаемых аргументов и значений этих функций?

### Задание 7

Создайте функцию (isWeekend), которая принимает день недели (с вашего enum) и возвращает boolean значение, указывающее, это день рабочий или выходной.

### Задание 8

Создайте тип "Gender", используя union type, который может содержать значения "male", "female". Создайте переменную myGender этого типа.

### Задание 9

У вас есть два объекта:

```ts
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
```

Создайте новый тип данных, подходящий для этих двух объектов.
