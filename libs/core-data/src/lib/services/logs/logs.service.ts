import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Log } from '@webapp/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  model = 'logs';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Log[]>(this.getUrl());
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
