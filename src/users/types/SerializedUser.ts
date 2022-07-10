import {RoleEntity} from "./RoleEntity";
import {Exclude} from "class-transformer";


export class SerializedUser {
    name?: string;
    lastName?: string;
    id: number;
    username: string;
    phoneNumber: string;
    nationalCode?: string;
    email: string;
    roles: RoleEntity[]
    address?: string;


    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}