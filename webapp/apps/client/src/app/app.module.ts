import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreDataModule, coreDataRoutes } from '@webapp/core-data';
import { CoreStateModule, coreStateRoutes } from '@webapp/core-state';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { LogsComponent } from './logs/logs.component';
import { HomeComponent } from './home/home.component';
import { CalendarsListComponent } from './calendars/calendars-list/calendars-list.component';
import { CalendarsDetailComponent } from './calendars/calendars-detail/calendars-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SidebarComponent,
    LoginComponent,
    CalendarsComponent,
    LogsComponent,
    HomeComponent,
    CalendarsListComponent,
    CalendarsDetailComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
