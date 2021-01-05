import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { SettingsComponent } from "./settings/settings.component";
import { AuthGuardService } from "./auth/auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "logs",
    component: LogsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "settings",
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  { path: "**", redirectTo: "/calendar" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
