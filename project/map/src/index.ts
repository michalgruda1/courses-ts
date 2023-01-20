/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

new google.maps.Map(document.getElementById('googleMapBox') as HTMLElement, {
    center: {
        lat: 0,
        lng: 0,
    },
    zoom: 1,
});
