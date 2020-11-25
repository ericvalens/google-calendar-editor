import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Calendar } from '@webapp/api-interfaces';

@Component({
  selector: 'webapp-calendars-list',
  templateUrl: './calendars-list.component.html',
  styleUrls: ['./calendars-list.component.scss'],
})
export class CalendarsListComponent {
  @Input() calendars: Calendar[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() updated = new EventEmitter();
}
