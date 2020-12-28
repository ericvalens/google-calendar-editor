import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Configuration } from '@webapp/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  model = 'configuration';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Configuration>(this.getUrl());
  }

  update(configuration: Configuration) {
    return this.http.post(this.getUrl(), configuration);
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
