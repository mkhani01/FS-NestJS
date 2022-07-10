import {Injectable} from '@nestjs/common';
import {SerializedUser} from "../types/SerializedUser";
import {UserEntity} from "../types/UserEntity";
import {CreateUserDto} from "../dtos/create-user.dto";

@Injectable()
export class UsersService {
    private readonly users: UserEntity[] = [
        {
            id: "1",
            name: null,
            lastName: null,
            nationalCode: null,
            address: null,
            username: "admin3",
            password: "admin3",
            phoneNumber: "09121234563",
            email: "admin3@admin3.com",
            roles: [{
                id: "1",
                name: "admin",
                permissions: ["ALL"],
                color: null
            }]
        }
    ]

    search() {
        return this.users.map(user => {
            return new SerializedUser(user);
        });
    }

    findById(id: string) {
        return new SerializedUser(this.users.find(user => user.id === id));
    }

    create(createUserDto: CreateUserDto) {
        this.users.push(createUserDto);
        return this.users;
    }
}
