import { RegisterPermissionDto } from 'src/permissions/dtos/register-permission.dto';

export enum permissionEnums {
  CreateRole = 'CREATE_ROLE',
  DeleteRole = 'DELETE_ROLE',
  LoadRole = 'LOAD_ROLE',
  UpdateRole = 'UPDATE_ROLE',
}

export const rolePermissions: RegisterPermissionDto = {
  key: 'ROLE_GENERAL',
  displayName: 'All role permissions',
  children: [
    {
      key: 'CREATE_ROLE',
      displayName: 'Create role ',
    },
    {
      key: 'DELETE_ROLE',
      displayName: 'Delete role',
    },
    {
      key: 'LOAD_ROLE',
      displayName: 'Load roles',
    },
    {
      key: 'UPDATE_ROLE',
      displayName: 'Update role',
    },
  ],
};
