import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@webapp/core-data";

@Component({
  selector: "webapp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length) {
        let token = params["token"];
        if (token) {
          this.authService.createToken(token);
          this.router.navigate(["/calendar"]);
        }
      }
    });
  }

  googleSignIn() {
    this.authService.googleSignIn();
  }
}
