import { Module } from '@nestjs/common';
import { CalendarsModule } from '../calendars/calendars.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CalendarsModule, ConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
