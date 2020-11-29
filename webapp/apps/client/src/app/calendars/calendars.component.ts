import { Component, OnInit } from '@angular/core';
import { Calendar } from '@webapp/api-interfaces';
import { CalendarService } from '@webapp/core-data';
import { Observable } from 'rxjs';

const emptyCalendar: Calendar = {
  id: null,
  name: '',
  description: '',
  nextEvent: null,
};

@Component({
  selector: 'webapp-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss'],
})
export class CalendarsComponent implements OnInit {
  calendars$: Observable<Calendar[]>;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadCalendars();
  }

  resetForm() {}

  loadCalendars() {
    this.calendars$ = this.calendarService.all();
  }
}
