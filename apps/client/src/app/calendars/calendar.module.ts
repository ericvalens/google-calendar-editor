import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CalendarRoutingModule } from "./calendars-routing.module";
import { SharedModule } from "../shared/shared.module";
import { CalendarsComponent } from "./calendars.component";
import { CalendarsListComponent } from "./calendars-list/calendars-list.component";
import { CalendarsDetailComponent } from "./calendars-detail/calendars-detail.component";

@NgModule({
  imports: [CalendarRoutingModule, CommonModule, FormsModule, SharedModule],
  declarations: [
    CalendarsComponent,
    CalendarsListComponent,
    CalendarsDetailComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
