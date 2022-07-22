import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  Length,
  IsOptional,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateOwnerDto {
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
  roles: number[];

  @IsOptional()
  @Length(0, 100)
  address?: string;

  @IsNotEmpty()
  @Length(0, 100)
  ownerName: string;

  @IsNotEmpty()
  @Length(0, 100)
  ownerDisplayName: string;
}
