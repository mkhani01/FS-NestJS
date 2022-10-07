import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('FS-NestJS')
  .setDescription('Swagger of FS-NestJS')
  .setVersion('1.0')
  .addTag('Permissions')
  .addTag('Users')
  .addTag('Owners')
  .addTag('Roles')
  .addTag('Authentication')
  .addBearerAuth()
  .build();
