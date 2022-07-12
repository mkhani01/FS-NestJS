import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { RolesController } from './roles/controllers/roles.controller';
import { RolesModule } from './roles/roles.module';
import UserEntities from "./users/Entities";

@Module({
    imports: [UsersModule,RolesModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mysql',
        database: 'nest_fs',
        entities: [...UserEntities],
        synchronize: true,
    })],
    controllers: [RolesController],
    providers: [],
})
export class AppModule {
}
