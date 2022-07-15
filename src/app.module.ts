import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import UserEntities from './users/Entities';
import RoleEntities from './roles/Entities';

@Module({
  imports: [
    UsersModule,
    RolesModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'nest_fs',
      entities: [...UserEntities, ...RoleEntities],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
