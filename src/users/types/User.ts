import {Role} from "./Role";

export class User {
    id: number;
    name?: string;
    lastName?: string;
    username: string;
    password: string;
    phoneNumber: string;
    nationalCode?: string;
    email: string;
    roles: Role[]
    address?: string;
}