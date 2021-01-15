import { ObjectUnsubscribedError } from "rxjs";

export interface User{
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    kcId;
}