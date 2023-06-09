import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  const option = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('Using swagger to test the application')
    .setVersion('1.0')
    .build();

  const APIDoc = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('apidocs', app, APIDoc);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
