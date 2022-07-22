import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './owner/owner.module';
import UserEntities from './users/Entities';
import RoleEntities from './roles/Entities';
import OwnerEntities from './owner/Entities';

@Module({
  imports: [
    OwnerModule,
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
      entities: [...UserEntities, ...RoleEntities, ...OwnerEntities],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
