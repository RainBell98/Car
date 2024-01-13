import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from "./report.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports:[Report, TypeOrmModule.forFeature([Report])],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
