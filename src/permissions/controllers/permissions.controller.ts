import { Controller, Get, Inject } from '@nestjs/common';
import { PermissionsService } from '../services/permissions.service';
import { userAndOwnerInfo, UserInfoType } from 'src/utils/user.decorator';
import { ApiTags } from '@nestjs/swagger';
import { RequirePermissions } from 'src/utils/permission.decorator';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(
    @Inject('PERMISSION_SERVICE')
    private readonly permissionsService: PermissionsService,
  ) {}

  @Get('/CurrentUserPermissions')
  async getCurrentUserPermissions(@userAndOwnerInfo() userInfo: UserInfoType) {
    return this.permissionsService.getUserPermissions(
      userInfo.user.id,
      userInfo.owner.id,
    );
  }
}
