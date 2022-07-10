import { Module } from '@nestjs/common';
import {UsersController} from "./controllers/users.controller";
import {UsersService} from "./services/users.service";

@Module({
    controllers: [UsersController],
    providers: [{
        provide: 'USER_SERVICE',
        useClass: UsersService
    }],
})
export class UsersModule {}
