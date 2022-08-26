import { Module, Global, NestModule } from '@nestjs/common';
import { PermissionsController } from './controllers/permissions.controller';
import { PermissionsService } from './services/permissions.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './Entities';
import { UsersModule } from 'src/users/users.module';
import { RolesModule } from 'src/roles/roles.module';
import { PermissionsGaurd } from 'src/auth/permissions.guard';
import { LoggerMiddleware } from 'src/Middlewares/logger.middleware';

@Global()
@Module({
  imports: [
    UsersModule,
    RolesModule,
    TypeOrmModule.forFeature([PermissionEntity]),
  ],
  controllers: [PermissionsController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: PermissionsGaurd,
    },
    {
      provide: 'PERMISSION_SERVICE',
      useClass: PermissionsService,
    },
  ],
  exports: [
    {
      provide: 'PERMISSION_SERVICE',
      useClass: PermissionsService,
    },
  ],
})
export class PermissionsModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoggerMiddleware).forRoutes(PermissionsController);
  }
}
