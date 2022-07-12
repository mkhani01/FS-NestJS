import {Injectable} from '@nestjs/common';
import {SerializedUser} from "../types/SerializedUser";
import {UserEntity as UserEntity} from "../Entities/UserEntity";
import {CreateUserDto} from "../dtos/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
    }

    async search() {
        const allUsers = await this.userRepository.find({
            relations: ['roles']
        });
        return allUsers.map(user => new SerializedUser(user));
    }

    async findById(id: number) {
        const user = await this.userRepository.findOne({
            where: {
                id: id
            },
            relations: ['roles']
        });

        if (user) return new SerializedUser(user);
        else return null;
    }

    create(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }
}
