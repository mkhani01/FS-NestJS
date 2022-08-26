import { RegisterPermissionDto } from 'src/permissions/dtos/register-permission.dto';

export enum permissionEnums {
  CreateUser = 'CREATE_USER',
  DeleteUser = 'DELETE_USER',
  LoadUser = 'LOAD_USER',
  UpdateUser = 'UPDATE_USERS',
}

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
      key: 'LOAD_USER',
      displayName: 'Load users',
    },
    {
      key: 'UPDATE_USERS',
      displayName: 'Update user',
    },
  ],
};
