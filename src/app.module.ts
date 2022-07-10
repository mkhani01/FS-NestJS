import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import UserEntities from "./users/Entities";

@Module({
    imports: [UsersModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mysql',
        database: 'nest_fs',
        entities: [...UserEntities],
        synchronize: true,
    })],
    controllers: [],
    providers: [],
})
export class AppModule {
}
