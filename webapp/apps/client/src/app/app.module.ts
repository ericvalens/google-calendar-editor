import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule, coreDataRoutes } from '@webapp/core-data';
import { CoreStateModule, coreStateRoutes } from '@webapp/core-state';
import { RoutingModule } from './routing.module';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, SettingsComponent, SidebarComponent, LoginComponent],
  imports: [BrowserModule, HttpClientModule, CoreDataModule, CoreStateModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
