import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarRoutingModule } from './calendars-routing.module';
import { CalendarsComponent } from './calendars.component';
import { CalendarsListComponent } from './calendars-list/calendars-list.component';
import { CalendarsDetailComponent } from './calendars-detail/calendars-detail.component';

@NgModule({
  imports: [CommonModule, FormsModule, CalendarRoutingModule],
  declarations: [
    CalendarsComponent,
    CalendarsListComponent,
    CalendarsDetailComponent,
  ],
})
export class CalendarModule {}
