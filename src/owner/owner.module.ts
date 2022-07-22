import { Module, NestModule } from '@nestjs/common';
import { OwnerService } from './services/owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './Entities';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoggerMiddleware } from '../Middlewares/logger.middleware';
import { OwnerController } from './controllers/owner.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEntity]), UsersModule],
  controllers: [OwnerController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    {
      provide: 'OWNER_SERVICE',
      useClass: OwnerService,
    },
  ],
})
export class OwnerModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoggerMiddleware).forRoutes(OwnerController);
  }
}
