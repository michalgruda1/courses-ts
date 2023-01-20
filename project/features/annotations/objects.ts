const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        long: 15,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

// destructuring object requires specifying internal structure of object,
// of the property we want to assign variable to:
// { age } comes from { age: number } from variable 'profile'
const { age }: { age: number } = profile;

// destructuring lowest level properties require specifying 'full path' to properties we destructure to:
// {coords: lat, long} to get 'lat', and 'long'.
// then semicolon :
// then annotation to specify type of property 'coords' as { lat: number; long: number }
const {
    coords: { lat, long },
}: { coords: { lat: number | null; long: number | undefined } } = profile;

console.log(lat);
console.log(long);


// now some TS type annotations in profile to override inferred types
const profile2: {
    name: string,
    age: number,
    coords: {
        lat: number | null,
        long: number | undefined
    },
    setAge(age: number): void } = {
        name: 'Alexa',
        age: 35,
        coords: {
            lat: null,
            long: 23,
        }
    },
    (age) => {
        this.age = age;
    }
}