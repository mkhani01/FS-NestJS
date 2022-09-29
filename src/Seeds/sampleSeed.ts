import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { userPermissions } from 'src/users/permissions/Permissions';
import { rolePermissions } from 'src/roles/permissions/Permissions';
import { ownerPermissions } from 'src/owner/permissions/Permissions';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(AppModule);
  const allPermissions = [rolePermissions, userPermissions, ownerPermissions];
  const permissionService = application.get('PERMISSION_SERVICE');
  console.log('Seeding permissions');
  let superAdminPermission;
  if (!(await permissionService.findPermissionByKey('SUPER_ADMIN'))) {
    superAdminPermission = await permissionService.create({
      key: 'SUPER_ADMIN',
      displayName: 'Super admin',
      parent: null,
    });
    for (const permission of allPermissions) {
      console.log(permission);
      if (!(await permissionService.findPermissionByKey(permission.key))) {
        const createdRoot = await permissionService.create({
          ...permission,
          parent: {
            id: superAdminPermission.id,
          },
        });
        if (permission.children?.length) {
          for (const childPermission of permission.children) {
            if (
              !(await permissionService.findPermissionByKey(
                childPermission.key,
              ))
            ) {
              await permissionService.create({
                ...childPermission,
                parent: {
                  id: createdRoot.id,
                },
              });
            }
          }
        }
      }
    }
  }
  superAdminPermission = await permissionService.findPermissionByKey(
    'SUPER_ADMIN',
  );
  const ownerService = application.get('OWNER_SERVICE');
  console.log('Seeding permissions done. Seeding owners ...');
  let createdOwner;
  try {
    createdOwner = await ownerService.createOwner({
      name: 'Test owner 1',
      displayName: 'Owner test 1',
    });
  } catch (err) {
    console.error('Owner seed failed');
  }

  console.log('Seeding owners done. Seeding roles ...');
  const rolesService = application.get('ROLES_SERVICE');
  let createdRole;
  try {
    createdRole = await rolesService.create(
      {
        name: 'ADMIN',
        displayName: 'Admin',
        permissions: [superAdminPermission],
        color: '#000',
        description: 'This is admin role created by system',
      },
      createdOwner.id,
    );
  } catch (err) {
    console.error('Role seed failed');
  }
  console.log('Seeding roles done. Seeding users ...');
  const usersService = application.get('USER_SERVICE');
  try {
    await usersService.createMainUser(
      {
        name: 'Main User',
        lastName: 'Test',
        username: 'TEST_ADMIN',
        password: 'admin1234',
        phoneNumber: '09370376606',
        nationalCode: '0023558896',
        email: 'admin@admin.com',
        roles: [{ id: createdRole.id }],
        address: 'Iran,Tehran,212th east,district 22',
        defaultOwner: { id: createdOwner.id },
        owners: [{ id: createdOwner.id }],
        isMainUser: true,
      },
      createdOwner.id,
    );
  } catch (err) {
    console.error('seed user failed');
  }
  console.log('Seed users done');
  await application.close();
  process.exit(0);
}

bootstrap();
