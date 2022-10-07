import { Module, NestModule } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './Entities';
import { LoggerMiddleware } from '../Middlewares/logger.middleware';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RolesController],
  providers: [
    {
      provide: 'ROLES_SERVICE',
      useClass: RolesService,
    },
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
  exports: [
    {
      provide: 'ROLES_SERVICE',
      useClass: RolesService,
    },
  ],
})
export class RolesModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoggerMiddleware).forRoutes(RolesController);
  }
}
