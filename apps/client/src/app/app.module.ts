import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CoreDataModule, coreDataRoutes } from "@webapp/core-data";
import { CoreStateModule, coreStateRoutes } from "@webapp/core-state";
import { AppComponent } from "./app.component";
import { CalendarModule } from "./calendars/calendar.module";
import { RoutingModule } from "./routing.module";
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LogsComponent } from "./logs/logs.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SidebarComponent,
    LoginComponent,
    LogsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    CalendarModule,
    RoutingModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
