import {Permissions} from "./Permissions";

export class Role {
    id: number;
    name: string;
    permissions: Permissions[];
    color?: string;
}