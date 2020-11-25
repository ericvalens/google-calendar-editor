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
  selectedCalendar: Calendar;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadCalendars();
    this.selectCalendar(null);
  }

  resetForm() {
    this.selectedCalendar = emptyCalendar;
  }

  selectCalendar(calendar: Calendar) {
    this.selectedCalendar = calendar;
  }

  loadCalendars() {
    this.calendars$ = this.calendarService.all();
  }

  updateCalendar(calendar: Calendar) {
    this.calendarService.update(calendar).subscribe((result) => this.reset());
  }
}
