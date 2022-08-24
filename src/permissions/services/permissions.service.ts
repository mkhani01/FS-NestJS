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

  async getUserPermissions(_userId: number, _ownerId: number) {
    return this.permissionRepository.find({
      relations:{
        parent:true,
        children:true
      }
    });
  }
}
