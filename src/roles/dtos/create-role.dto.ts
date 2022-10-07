import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { PermissionEntity } from 'src/permissions/Entities';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  displayName: string;

  @ApiProperty({
    type: () => [Permissions],
  })
  @IsArray()
  permissions: PermissionEntity[];

  @ApiProperty()
  @IsOptional()
  color: string;

  @ApiProperty()
  @IsOptional()
  description: string;
}

class Permissions {
  @ApiProperty()
  id: 'number';
  @ApiProperty()
  key: string;
  @ApiProperty()
  displayName?: string;
  @ApiProperty({
    nullable: true,
  })
  parent: Permissions;
  @ApiProperty({
    isArray: true,
    minItems: 0,
  })
  children: Permissions[];
}
