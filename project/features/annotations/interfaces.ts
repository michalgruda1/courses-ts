interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const drink = {
    name: 'Pepsi',
    color: 'Brown',
    sugar: 40,
    summary(): string {
        return `${this.name} has ${this.sugar} grams of sugar`;
    },
};

const printReport = (item: Reportable): void => {
    console.log(item.summary());
};

printReport(oldCivic);
printReport(drink);
