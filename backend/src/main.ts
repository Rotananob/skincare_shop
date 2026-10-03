import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // Validation pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Swagger docs
  const config = new DocumentBuilder()
    .setTitle('Skincare Shop API')
    .setDescription('API for Sokha Skin — Premium Skincare Cambodia')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 8000);
  console.log(`🚀 Backend running on http://localhost:${process.env.PORT ?? 8000}`);
  console.log(`📚 Swagger docs: http://localhost:${process.env.PORT ?? 8000}/api/docs`);
}
bootstrap();
