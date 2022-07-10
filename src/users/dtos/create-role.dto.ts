import {IsArray, IsNotEmpty, IsOptional} from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsArray()
    permissions: string[];

    @IsOptional()
    color: string;

}