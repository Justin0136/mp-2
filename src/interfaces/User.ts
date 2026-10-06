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
    login: {
        uuid: string;
    }
    dob: {
        age: number;
    };
    picture: {
        large: string;
    };
}