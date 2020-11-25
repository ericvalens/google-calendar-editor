import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Calendar } from '@webapp/api-interfaces';

@Component({
  selector: 'webapp-calendars-detail',
  templateUrl: './calendars-detail.component.html',
  styleUrls: ['./calendars-detail.component.scss'],
})
export class CalendarsDetailComponent {
  currentCalendar: Calendar;
  originalName = '';

  @Input() set calendar(value: Calendar) {
    if (value) {
      this.originalName = value.name;
    }
    this.currentCalendar = { ...value };
  }
  @Output() update = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
