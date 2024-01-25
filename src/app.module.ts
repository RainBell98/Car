import { MiddlewareConsumer, Module, ValidationPipe } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from "./users/user.entity";
import { Report } from "./reports/report.entity";
import { typeOrmConfig } from "../configs/typeorm.config";
import { APP_PIPE } from "@nestjs/core";
const cookieSession = require('cookie-session')
@Module({
  imports: [UsersModule, ReportsModule,
    TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      })
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(cookieSession({
      keys:['asdfasdf']
    })
    ).forRoutes('*')
  }
}
