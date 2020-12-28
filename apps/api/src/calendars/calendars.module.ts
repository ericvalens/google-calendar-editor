import { Module, HttpModule } from '@nestjs/common';
import { CalendarsService } from './calendars.service';
import { CalendarsController } from './calendars.controller';

@Module({
  imports: [HttpModule],
  controllers: [CalendarsController],
  providers: [CalendarsService],
})
export class CalendarsModule {}
