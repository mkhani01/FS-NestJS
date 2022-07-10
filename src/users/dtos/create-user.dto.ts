import {
    IsNotEmpty,
    IsEmail,
    IsPhoneNumber,
    Length,
    IsOptional,
    ValidateNested,
    IsArray
} from 'class-validator';
import {Type} from "class-transformer";
import {CreateRoleDto} from './create-role.dto';


export class CreateUserDto {
    @IsOptional()
    @Length(5, 20)
    name?: string;

    @IsOptional()
    @Length(5, 20)
    lastName?: string;

    @IsNotEmpty()
    id: string;
    username: string;

    @IsNotEmpty()
    @Length(8, 50)
    password: string;

    @IsNotEmpty()
    @IsPhoneNumber('IR')
    phoneNumber: string;

    @IsOptional()
    @Length(10, 10)
    nationalCode?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreateRoleDto)
    roles: CreateRoleDto[]

    @IsOptional()
    @Length(0, 100)
    address?: string;
}
