import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CalendarsModule } from '../calendars/calendars.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { LogsModule } from '../logs/logs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, CalendarsModule, ConfigurationModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
