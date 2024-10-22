import { Module, NestModule } from '@nestjs/common';
import { OwnerService } from './services/owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './Entities';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoggerMiddleware } from '../Middlewares/logger.middleware';
import { OwnerController } from './controllers/owner.controller';
import { UsersModule } from '../users/users.module';
import { RolesModule } from 'src/roles/roles.module';
import { PermissionsModule } from 'src/permissions/permissions.module';

@Module({
  imports: [
    UsersModule,
    RolesModule,
    PermissionsModule,
    TypeOrmModule.forFeature([OwnerEntity]),
  ],
  controllers: [OwnerController],
  providers: [
    {
      provide: 'APP_GUARD',
      useExisting: JwtAuthGuard,
    },
    {
      provide: 'OWNER_SERVICE',
      useClass: OwnerService,
    },
    JwtAuthGuard,
  ],
  exports: [
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
