import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from 'src/utils/reponse.interceptor';
import { ErrorsInterceptor } from 'src/utils/errors.interceptor';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from 'src/utils/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  if (process.env.MODE === 'PRODUCTION') {
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalInterceptors(new ErrorsInterceptor());
  }

  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();
