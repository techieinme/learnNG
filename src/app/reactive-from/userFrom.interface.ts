export interface userFromInterface {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    isMarried: boolean;
    county: County[];
}

interface County {
    id: number;
    name: string;
}

export class Country {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
