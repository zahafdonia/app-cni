export class User {
    cin: number;
    password: string;

    constructor(cin: number = 0, password: string = '') {
        this.cin = cin;
        this.password = password;
    }
}

  