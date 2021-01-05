import { Component, OnInit } from "@angular/core";
import { AuthService } from "@webapp/core-data";

@Component({
  selector: "webapp-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.removeToken();
  }
}
