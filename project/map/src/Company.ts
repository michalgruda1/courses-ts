import { faker } from '@faker-js/faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        long: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: Number.parseFloat(faker.address.latitude()),
            long: Number.parseFloat(faker.address.longitude()),
        };
    }
}
