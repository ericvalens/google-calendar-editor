import { Calendar } from '@webapp/api-interfaces';
import { Controller, Get, Body, Put, Param, Delete } from '@nestjs/common';
import { CalendarsService } from './calendars.service';

@Controller('calendars')
export class CalendarsController {
  constructor(private readonly calendarsService: CalendarsService) {}

  @Get()
  findAll() {
    return this.calendarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() calendar: Calendar) {
    return this.calendarsService.update(id, calendar);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarsService.remove(id);
  }
}
