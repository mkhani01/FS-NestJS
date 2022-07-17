import { Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { LoggerMiddleware } from '../Middlewares/logger.middleware';
import { UserEntity } from './Entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class UsersModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  }
}
