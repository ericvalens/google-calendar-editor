import { Module } from '@nestjs/common';
import { CalendarsModule } from '../calendars/calendars.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CalendarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
