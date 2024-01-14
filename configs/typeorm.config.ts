
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import { User } from "../src/users/user.entity";
import { Report } from "../src/reports/report.entity";

export const typeOrmConfig : TypeOrmModuleOptions ={

  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "mycv",
  "password": "dldnwhd@",
  "database": "mycvDB",
  "entities": ["dist/**/**.entity{.ts,.js}",User],
  "synchronize": true

}