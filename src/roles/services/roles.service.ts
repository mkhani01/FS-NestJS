import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '../Entities';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async search() {
    return this.roleRepository.find();
  }

  async findById(id: number) {
    const role = await this.roleRepository.findOne({ where: { id: id } });
    if (role) return role;
    else return null;
  }

  async create(createRoleDto: any) {
    const newRole = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(newRole);
  }
}
