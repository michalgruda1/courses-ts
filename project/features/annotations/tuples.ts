const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40;

// Type alias
// notice = sign used to declare type, not semicolon :
type Drink = [string, boolean, number];
const cola: Drink = ['brown', true, 40];
