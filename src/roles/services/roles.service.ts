import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '../Entities';
import { GlobalService } from 'src/global/services/global.service';
import { CreateRoleDto } from '../dtos/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    @Inject('GLOBAL_SERVICE') private readonly globalService: GlobalService,
  ) {}

  async search(ownerId: number) {
    return this.roleRepository.find({
      where: {
        owner: {
          id: ownerId,
        },
      },
      relations: ['permissions'],
    });
  }

  async findById(id: number, ownerId: number) {
    const role = await this.roleRepository.findOne({ where: { id: id } });
    if (role) {
      if (this.globalService.checkOwner(role, ownerId)) {
        return role;
      } else {
        return null;
      }
    } else return null;
  }

  async create(createRoleDto: CreateRoleDto, ownerId: number) {
    const newRole = this.roleRepository.create({
      ...createRoleDto,
      owner: { id: ownerId },
    });
    return this.roleRepository.save(newRole);
  }

  async getRolePermissions(id: number, ownerId: number) {
    const role = await this.roleRepository.findOne({
      where: { id: id },
      relations: {
        owner: true,
        permissions: {
          parent: true,
          children: true,
        },
      },
    });
    if (role) {
      if (this.globalService.checkOwner(role, ownerId)) {
        return role.permissions;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }
}
