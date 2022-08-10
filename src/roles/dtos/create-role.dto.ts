import {IsArray, IsNotEmpty, IsOptional} from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    displayName: string;

    @IsArray()
    permissions: string[];

    @IsOptional()
    color: string;

    @IsOptional()
    description: string;

}