import {Role} from "./Role";
import {Exclude} from "class-transformer";


export class SerializedUser {
    name?: string;
    lastName?: string;
    id: number;
    username: string;
    phoneNumber: string;
    nationalCode?: string;
    email: string;
    roles: Role[]
    address?: string;


    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}