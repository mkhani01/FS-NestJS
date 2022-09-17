import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(4, 20)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 50)
  password: string;
}
