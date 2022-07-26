import { Inject, Injectable } from '@nestjs/common';
import { SerializedUser } from '../types/SerializedUser';
import { UserEntity as UserEntity } from '../Entities/UserEntity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalService } from 'src/global/services/global.service';
import { CreateMainUserDto } from '../dtos/create-main-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @Inject('GLOBAL_SERVICE') private readonly globalService: GlobalService,
  ) {}

  async search(ownerId: number) {
    const allUsers = await this.userRepository.find({
      where: [
        {
          owners: {
            id: ownerId,
          },
        },
      ],
      relations: ['roles'],
    });
    return allUsers.map((user) => new SerializedUser(user));
  }

  async findById(id: number, ownerId: number) {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
      relations: ['roles', 'owners'],
    });
    if (user) {
      if (this.globalService.checkOwner(user, ownerId)) {
        return new SerializedUser(user);
      } else {
        return null;
      }
    } else return null;
  }

  async create(createUserDto: CreateUserDto, ownerId: number) {
    const dtoData = {
      ...createUserDto,
      isMainUser: false,
      owners: [{ id: ownerId }],
    };
    const newUser = this.userRepository.create(dtoData);
    const savedUser = await this.userRepository.save(newUser);
    return this.findById(savedUser.id, ownerId);
  }

  async createMainUser(createMainUserDto: CreateMainUserDto, ownerId: number) {
    const newUser = this.userRepository.create(createMainUserDto);
    const savedUser = await this.userRepository.save(newUser);
    return this.findById(savedUser.id, ownerId);
  }

  async findUserByUserName(username: string) {
    return this.userRepository.findOne({
      where: {
        username: username,
      },
      relations: ['owners'],
    });
  }
}
