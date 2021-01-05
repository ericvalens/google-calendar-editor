import { Component } from "@angular/core";
import { AuthService } from "@webapp/core-data";

@Component({
  selector: "webapp-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private readonly authService: AuthService) {}

  isUserLoggedIn() {
    return this.authService.getToken();
  }
}
