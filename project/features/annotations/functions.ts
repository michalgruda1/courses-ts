// Annotating functions
// inference works only for return type, not for argument type
// although inference works for return type, we SHOULD NOT use it
// as inference sees code as it is, not as it should be. Only dev knows how it should be (return vs void)

const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

// Always throws = never reaches an end of function
const throwErr = (message: string): never => {
    throw new Error('sth');
};

// object literal and destructuring
const forecast = {
    date: new Date(),
    weather: 'sunny',
};

// without destructuring
const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

// destructuring - notice first { date, weather }
//    is destructuring statement - variable names must match type.
//    Destructuring and type annotation are always separated, by colon :
const logWeather2 = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};
