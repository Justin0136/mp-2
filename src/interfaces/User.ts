export interface User {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
    };
    email: string;
    dob: {
        age: number;
    };
    picture: {
        large: string;
    };
}