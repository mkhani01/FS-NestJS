import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from 'src/permissions/Entities';
import { TreeRepository } from 'typeorm';
import { RegisterPermissionDto } from 'src/permissions/dtos/register-permission.dto';
import { UsersService } from 'src/users/services/users.service';
import { RolesService } from 'src/roles/services/roles.service';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepository: TreeRepository<PermissionEntity>,
    @Inject('USER_SERVICE') private readonly userService: UsersService,
    @Inject('ROLES_SERVICE') private readonly rolesService: RolesService,
  ) {}

  async create(registerPermissionDto: RegisterPermissionDto) {
    this.permissionRepository.create(registerPermissionDto);
    return this.permissionRepository.save(registerPermissionDto);
  }

  async getUserPermissions(userId: number, ownerId: number) {
    const userRoles = await this.userService.getCurrentUserRoles(
      userId,
      ownerId,
    );
    if (!userRoles) {
      return null;
    } else {
      let userPermissions = [];
      for (const role of userRoles) {
        const rolePermissions = await this.rolesService.getRolePermissions(
          role.id,
          ownerId,
        );
        userPermissions = userPermissions.concat(rolePermissions);
      }

      return this.getPermissionKeys(userPermissions);
    }
  }

  getPermissionKeys(permissions: PermissionEntity[]) {
    let keys = [];
    permissions.forEach((rootPermission: PermissionEntity) => {
      keys = keys.concat(rootPermission.key);
      if (rootPermission.children) {
        rootPermission.children.forEach((childPermission: PermissionEntity) => {
          keys = keys.concat(childPermission.key);
          if (childPermission.children) {
            childPermission.children.forEach((grandChild: PermissionEntity) => {
              keys = keys.concat(grandChild.key);
            });
          }
        });
      }
    });
    return keys;
  }
}
