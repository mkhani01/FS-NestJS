import {Injectable} from '@nestjs/common';
import {SerializedUser} from "../types/SerializedUser";
import {UserEntity} from "../types/UserEntity";
import {CreateUserDto} from "../dtos/create-user.dto";

@Injectable()
export class UsersService {
    private readonly users: UserEntity[] = [
        {
            id: 1,
            name: null,
            lastName: null,
            nationalCode: null,
            address: null,
            username: "admin3",
            password: "admin3",
            phoneNumber: "09121234563",
            email: "admin3@admin3.com",
            roles: [{
                id: 1,
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

    findById(id: number) {
        const user = this.users.find(user => user.id === id);
        if (user) return new SerializedUser(user);
        else return user
    }

    create(createUserDto: CreateUserDto) {
        const {email, password, phoneNumber, username, name, lastName, nationalCode, address} = createUserDto;
        const user: UserEntity = {
            address: address,
            email: email,
            lastName: lastName,
            name: name,
            nationalCode: nationalCode,
            password: password,
            phoneNumber: phoneNumber,
            roles: [],
            username: username,
            id: this.users.length + 1
        };
        this.users.push(user);
        return this.users;
    }
}
