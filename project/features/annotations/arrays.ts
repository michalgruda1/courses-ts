const carMakers = ['Honda', 'Ford', 'Chevy'];
const dates: Date[] = [];
const carsByMake = [['toyota'], ['honda'], ['ford']];
const carsByMake2: string[][] = [];
console.log(typeof carsByMake === typeof carsByMake2);

// type annotations to override type inference in arrays, to allow for flexible types
const importantDates: (Date | string)[] = [];
importantDates[0] = new Date();
importantDates[1] = '2022-11-23';
