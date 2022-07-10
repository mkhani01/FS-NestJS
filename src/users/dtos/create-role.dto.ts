import {IsArray, IsNotEmpty, IsOptional} from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty()
    name: string;

    @IsArray()
    permissions: string[];

    @IsOptional()
    color: string;

}