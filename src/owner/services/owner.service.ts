import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerEntity } from '../Entities';
import { CreateOwnerDto } from '../dtos/create-owner.dto';
import { SingleOwnerDto } from '../dtos/create-single-owner.dto';
import { UsersService } from 'src/users/services/users.service';
import { CreateMainUserDto } from 'src/users/dtos/create-main-user.dto';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerEntity)
    private readonly ownerRepository: Repository<OwnerEntity>,
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async search() {
    return this.ownerRepository.find({
      relations: ['mainUser'],
    });
  }

  async findById(id: number) {
    const owner = await this.ownerRepository.findOne({
      where: {
        id: id,
      },
    });

    if (owner) return owner;
    else return null;
  }

  async createOwnerUser(createMainUserDto: CreateMainUserDto, ownerId: number) {
    return this.usersService.createMainUser(createMainUserDto, ownerId);
  }

  async createOwner(singleOwnerDto: SingleOwnerDto) {
    const newOwner = this.ownerRepository.create(singleOwnerDto);
    const savedOwner = await this.ownerRepository.save(newOwner);
    return this.findById(savedOwner.id);
  }

  async create(createOwnerDto: CreateOwnerDto) {
    const singleOwnerDto: SingleOwnerDto = {
      name: createOwnerDto.ownerName,
      displayName: createOwnerDto.ownerDisplayName,
    };
    const newOwner = await this.createOwner(singleOwnerDto);
    const createMainUserDto: CreateMainUserDto = {
      name: createOwnerDto.name,
      lastName: createOwnerDto.lastName,
      username: createOwnerDto.username,
      password: createOwnerDto.password,
      phoneNumber: createOwnerDto.phoneNumber,
      nationalCode: createOwnerDto.nationalCode,
      email: createOwnerDto.email,
      address: createOwnerDto.address,
      isMainUser: true,
      owners: [{ id: newOwner.id }],
      roles: [{ id: 1 }],
    };
    return this.createOwnerUser(createMainUserDto, newOwner.id);
  }
}
