let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingAtAll: null = null;
let nothing: undefined = undefined;

// Arrays
let colors: string[] = ['red', 'green'];
let numbers: number[] = [1, 3, 4];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations:
// 1) Function that use any type:
const json = '{"x": 10, "y": 20}';
interface Coordinates {
  x: string;
  y: string;
}
const coordinates: Coordinates = JSON.parse(json);
console.log(coordinates);
// or:
const coordinates2: { x: string; y: number } = JSON.parse(json);
console.log(coordinates2);

// 2) Delayed initializatioon - when we declare variabke in one line and assign it later
let words = ['red', 'blue', 'green'];
let found: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') found = true;
}

// 3) Variable that have type that can't be inferred from usage
let numbers2 = [-10, 20, 50];
let aboveZero: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers2[i] > 0) aboveZero = true;
  else {
    aboveZero = numbers2[i];
  }
}
