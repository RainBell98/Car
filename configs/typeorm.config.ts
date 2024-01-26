
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import { User } from "../src/users/user.entity";
import { Report } from "../src/reports/report.entity";
import * as dotenv from 'dotenv';
import * as process from "process";
dotenv.config()
export const typeOrmConfig : TypeOrmModuleOptions ={

  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "mycv",
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["dist/**/**.entity{.ts,.js}",User],
  "synchronize": true

}