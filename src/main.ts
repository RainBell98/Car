import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { setupApp } from "./set-up";

const cookieSession = require('cookie-session')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupApp(app)
  await app.listen(3000);
}
bootstrap();
