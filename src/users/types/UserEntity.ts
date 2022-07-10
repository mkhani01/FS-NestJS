import {RoleEntity} from "./RoleEntity";

export class UserEntity {
    id: number;
    name?: string;
    lastName?: string;
    username: string;
    password: string;
    phoneNumber: string;
    nationalCode?: string;
    email: string;
    roles: RoleEntity[]
    address?: string;
}