import { ObjectUnsubscribedError } from "rxjs";

export class User{


    public constructor(username: string) {
        this.username = username;
    }

    firstName: string;
    lastName: string;
    username: string;
    email: string;
    kcId;
}