import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(AppModule);
  const ownerService = application.get('OWNER_SERVICE');
  console.log('Creating owners ...');
  const createdOwner = await ownerService.createOwner({
    name: 'Test owner 1',
    displayName: 'Owner test 1',
  });
  console.log('Seeding owners done. Seeding roles ...');
  const rolesService = application.get('ROLES_SERVICE');
  const createdRole = await rolesService.create(
    {
      name: 'system_admin',
      displayName: 'Admin',
      permissions: ['ALL'],
      color: '#000',
      description: 'This is admin role created by system',
    },
    createdOwner.id,
  );
  console.log('Seeding roles done. Seeding users ...');
  const usersService = application.get('USER_SERVICE');
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
      owners: [{ id: createdOwner.id }],
      isMainUser: true,
    },
    createdOwner.id,
  );
  await application.close();
  process.exit(0);
}

bootstrap();
