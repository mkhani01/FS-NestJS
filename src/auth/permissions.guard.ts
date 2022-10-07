import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PermissionsService } from 'src/permissions/services/permissions.service';
import { PERMISSIONS_KEY } from 'src/utils/permission.decorator';
import { getUserInfoFunc } from 'src/utils/user.decorator';

@Injectable()
export class PermissionsGaurd implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject('PERMISSION_SERVICE')
    private readonly permissionsService: PermissionsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<Permissions[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredPermissions) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const userAndOwnerInfo = getUserInfoFunc(request.headers.authorization);
    const userPermissions = async () => {
      return this.permissionsService.getUserPermissions(
        userAndOwnerInfo.user.id,
        userAndOwnerInfo.owner.id,
      );
    };
    const loggedInuserPermissions = await userPermissions();
    return requiredPermissions.some((permission) =>
      loggedInuserPermissions.includes(permission),
    );
  }
}
