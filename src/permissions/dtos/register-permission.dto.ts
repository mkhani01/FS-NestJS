import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

type Parent = {
  id: number;
};

type Child = {
  key: string;
  displayName: string;
  parent?: Child;
  children?: Child[];
};

export class RegisterPermissionDto {
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  displayName: string;

  @IsOptional()
  parent?: Parent;

  @IsOptional()
  @IsArray()
  children?: Child[];
}
