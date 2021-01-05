import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { environment } from "@env/environment";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  model = "auth";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {}

  googleSignIn() {
    this.document.location.href = this.getUrl() + "/google/signin";
  }

  createToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token") ? true : false;
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }
}
