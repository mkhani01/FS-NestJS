import { IsNotEmpty, Length } from 'class-validator';

export class SingleOwnerDto {
  @IsNotEmpty()
  @Length(0, 100)
  name: string;

  @IsNotEmpty()
  @Length(0, 100)
  displayName: string;
}
