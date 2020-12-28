import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarsComponent } from './calendars.component';
import { CalendarsListComponent } from './calendars-list/calendars-list.component';
import { CalendarsDetailComponent } from './calendars-detail/calendars-detail.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarsComponent,
    children: [
      {
        path: '',
        component: CalendarsListComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: CalendarsDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CalendarRoutingModule {}
