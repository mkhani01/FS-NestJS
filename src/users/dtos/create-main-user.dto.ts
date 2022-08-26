import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  Length,
  IsOptional,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

type Role = {
  id: number;
  name?: string;
};

type owner = {
  id: number;
};

export class CreateMainUserDto {
  @IsOptional()
  @Length(5, 20)
  name?: string;

  @IsOptional()
  @Length(5, 20)
  lastName?: string;

  @IsNotEmpty()
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
  @ArrayMinSize(1)
  roles: Role[];

  @IsOptional()
  @Length(0, 100)
  address?: string;

  @IsNotEmpty()
  defaultOwner: owner;

  @IsNotEmpty()
  owners: owner[];

  @IsOptional()
  isMainUser: boolean = false;
}
