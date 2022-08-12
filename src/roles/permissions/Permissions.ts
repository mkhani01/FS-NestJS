import { RegisterPermissionDto } from 'src/permissions/dtos/register-permission.dto';

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
      key: 'SHOW_ROLE',
      displayName: 'show roles',
    },
    {
      key: 'UPDATE_ROLE',
      displayName: 'Update role',
    },
  ],
};
