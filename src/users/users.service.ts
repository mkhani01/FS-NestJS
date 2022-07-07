import {Injectable} from '@nestjs/common';
import {SingleUser} from "./interfaces/singleUser";

@Injectable()
export class UsersService {
    private readonly users: SingleUser[] = [
        {
            id: "1",
            username: "admin",
            password: "admin",
            phoneNumber: "09121234567",
            email: "admin@admin.com",
            roles: []
        },
        {
            id: "2",
            username: "admin2",
            password: "admin2",
            phoneNumber: "09121234562",
            email: "admin2@admin2.com",
            roles: []
        },
        {
            id: "3",
            username: "admin3",
            password: "admin3",
            phoneNumber: "09121234563",
            email: "admin3@admin3.com",
            roles: []
        }
    ]

    search() {
        return this.users;
    }

    findById(id: string) {
        return this.users.find(user => user.id === id);
    }
}
