import { RegisterPermissionDto } from 'src/permissions/dtos/register-permission.dto';

export const userPermissions: RegisterPermissionDto = {
  key: 'USER_GENERAL',
  displayName: 'All users permissions',
  children: [
    {
      key: 'CREATE_USER',
      displayName: 'Create user',
    },
    {
      key: 'DELETE_USER',
      displayName: 'Delete user',
    },
    {
      key: 'SHOW_USER',
      displayName: 'show users',
    },
    {
      key: 'UPDATE_USERS',
      displayName: 'Update user',
    },
  ],
};
