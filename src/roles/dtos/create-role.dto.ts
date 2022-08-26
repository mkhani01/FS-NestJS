import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { PermissionEntity } from 'src/permissions/Entities';

export class CreateRoleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  displayName: string;

  @IsArray()
  permissions: PermissionEntity[];

  @IsOptional()
  color: string;

  @IsOptional()
  description: string;
}
