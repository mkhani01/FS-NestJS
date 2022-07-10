import {RoleEntity} from "./RoleEntity";

export class UserEntity {
    name?: string;
    lastName?: string;
    id: string;
    username: string;
    password: string;
    phoneNumber: string;
    nationalCode?: string;
    email: string;
    roles: RoleEntity[]
    address?: string;
}