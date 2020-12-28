import { Component, OnInit } from '@angular/core';
import { Calendar } from '@webapp/api-interfaces';
import { CalendarService } from '@webapp/core-data';

const emptyCalendar: Calendar = {
  id: null,
  name: '',
  monitor: false,
};

@Component({
  selector: 'webapp-calendars-list',
  templateUrl: './calendars-list.component.html',
  styleUrls: ['./calendars-list.component.scss'],
})
export class CalendarsListComponent implements OnInit {
  calendars: Calendar[];
  selectAllCalendars: boolean;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadCalendars();
  }

  loadCalendars() {
    this.calendarService
      .all()
      .subscribe((calendars) => (this.calendars = calendars));
  }

  onSelectAllCalendars(monitor: boolean) {
    this.selectAllCalendars = monitor;
    this.calendars.forEach((c) => (c.monitor = monitor));
  }

  updateAllCalendarSettings() {
    this.calendarService.updateAll(this.calendars);
  }
}
