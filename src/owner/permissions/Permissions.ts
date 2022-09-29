import { RegisterPermissionDto } from 'src/permissions/dtos/register-permission.dto';

export const ownerPermissions: RegisterPermissionDto = {
  key: 'OWNER_GENERAL',
  displayName: 'All owner permissions',
  children: [
    {
      key: 'CREATE_OWNER',
      displayName: 'Create owner ',
    },
    {
      key: 'DELETE_OWNER',
      displayName: 'Delete owner',
    },
    {
      key: 'SHOW_OWNER',
      displayName: 'show owner',
    },
    {
      key: 'UPDATE_OWNER',
      displayName: 'Update owner',
    },
  ],
};
