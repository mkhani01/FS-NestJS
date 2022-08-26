import { Inject, Injectable } from '@nestjs/common';
import { SerializedUser } from '../types/SerializedUser';
import { UserEntity as UserEntity } from '../Entities/UserEntity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalService } from 'src/global/services/global.service';
import { CreateMainUserDto } from '../dtos/create-main-user.dto';
import { paginate, PaginateQuery } from 'nestjs-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @Inject('GLOBAL_SERVICE') private readonly globalService: GlobalService,
  ) {}

  async search(ownerId: number, query: PaginateQuery) {
    const queryBuilder = this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.owners', 'owners')
      .where('owners.id = :ownerId', { ownerId });

    const result = await paginate(query, queryBuilder, {
      sortableColumns: ['id', 'name', 'lastName', 'username'],
      searchableColumns: [
        'name',
        'lastName',
        'username',
        'email',
        'nationalCode',
      ],
      defaultSortBy: [['id', 'DESC']],
    });
    delete result.links;
    return result;
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
      defaultOwner: { id: ownerId },
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
      select: [
        'id',
        'name',
        'lastName',
        'username',
        'password',
        'phoneNumber',
        'nationalCode',
        'email',
        'address',
      ],
      relations: ['owners', 'defaultOwner'],
    });
  }

  async getCurrentUser(userId: number, ownerId: number) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (user) {
      if (this.globalService.checkOwner(user, ownerId)) {
        return new SerializedUser(user);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  async getCurrentUserRoles(userId: number, ownerId: number) {
    const user = await this.findById(userId, ownerId);
    if (user) {
      return user.roles;
    } else {
      return null;
    }
  }
}
