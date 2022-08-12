import { Module } from '@nestjs/common';
import { PermissionsController } from './controllers/permissions.controller';
import { PermissionsService } from './services/permissions.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './Entities';
import { UsersModule } from 'src/users/users.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [
    UsersModule,
    RolesModule,
    TypeOrmModule.forFeature([PermissionEntity]),
  ],
  providers: [
    {
      provide: 'PERMISSION_SERVICE',
      useClass: PermissionsService,
    },
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [PermissionsController],
})
export class PermissionsModule {}
