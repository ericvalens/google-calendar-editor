import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarsDetailComponent } from './calendars/calendars-detail/calendars-detail.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'calendars',
    component: CalendarsComponent,
    children: [{ path: 'calendar/:id', component: CalendarsDetailComponent }],
  },
  { path: 'logs', component: LogsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/calendars' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
