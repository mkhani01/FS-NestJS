import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './owner/owner.module';
import { GlobalModule } from './global/global.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ConfigModule } from '@nestjs/config';

//This line is required to load .env file
ConfigModule.forRoot();

//This is the function where typeORM configs can be set. TODO: add other databases options
function generateAppConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host:
      process.env.MODE.trimEnd() === 'TEST'
        ? process.env.MYSQL_HOST_TEST
        : process.env.MYSQL_HOST,
    port:
      process.env.MODE.trimEnd() === 'TEST'
        ? parseInt(process.env.MYSQL_PORT_TEST)
        : parseInt(process.env.MYSQL_PORT),
    username:
      process.env.MODE.trimEnd() === 'TEST'
        ? process.env.MYSQL_USERNAME_TEST
        : process.env.MYSQL_USERNAME,
    password:
      process.env.MODE.trimEnd() === 'TEST'
        ? process.env.MYSQL_PASSWORD_TEST
        : process.env.MYSQL_PASSWORD,
    database:
      process.env.MODE.trimEnd() === 'TEST'
        ? process.env.MYSQL_DATABASE_TEST
        : process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    logger: process.env.MODE !== 'PRODUCTION' ? 'debug' : 'file',
    autoLoadEntities: true,
  };
}

@Module({
  imports: [
    PermissionsModule,
    OwnerModule,
    UsersModule,
    RolesModule,
    AuthModule,
    GlobalModule,
    TypeOrmModule.forRoot(generateAppConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
