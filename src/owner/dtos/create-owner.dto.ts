import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  Length,
  IsOptional,
  IsArray,
  ArrayMinSize,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class Role {
  id: number;
  name?: string;
}
export class CreateOwnerDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Length(5, 20)
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Length(5, 20)
  lastName?: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 50)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber('IR')
  phoneNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Length(10, 10)
  nationalCode?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Length(0, 100)
  address?: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 100)
  ownerName: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 100)
  ownerDisplayName: string;
}
