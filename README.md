# ts-hw-module-1

# Базові типи

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
