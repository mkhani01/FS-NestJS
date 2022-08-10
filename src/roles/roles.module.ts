import { Module, NestModule } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './Entities';
import { LoggerMiddleware } from '../Middlewares/logger.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RolesController],
  providers: [
    {
      provide: 'ROLES_SERVICE',
      useClass: RolesService,
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
