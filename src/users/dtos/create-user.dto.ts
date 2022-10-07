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

export class CreateUserDto {
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
  @Length(4, 20)
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

  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
      title: 'Role',
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: 'string',
        },
      },
      required: ['id'],
    },
  })
  @IsArray()
  @ArrayMinSize(1)
  roles: Role[];

  @ApiPropertyOptional()
  @IsOptional()
  @Length(0, 100)
  address?: string;

  @ApiPropertyOptional()
  @IsOptional()
  isMainUser: boolean = false;
}
