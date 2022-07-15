import { Module, NestModule } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from '../users/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/Entities';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';
import { UsersModule } from '../users/users.module';
import { LoggerMiddleware } from '../Middlewares/logger.middleware';
import { UsersController } from '../users/controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStrategy,
  ],
})
export class AuthModule {}
