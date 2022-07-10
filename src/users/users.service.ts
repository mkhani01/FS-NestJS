import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dtos/create-user.dto";

@Injectable()
export class UsersService {
    private readonly users: CreateUserDto[] = [
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
        return this.users;
    }

    findById(id: string) {
        return this.users.find(user => user.id === id);
    }

    create(createUserDto: CreateUserDto) {
        this.users.push(createUserDto);
        return this.users;
    }
}
