import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  model = 'auth';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {}

  googleSignIn() {
    this.document.location.href = this.getUrl() + '/google/signin';
  }

  requestGoogleRedirectUri(): Observable<any> {
    return this.http.get(this.getUrl() + '/google/redirect');
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }
}
