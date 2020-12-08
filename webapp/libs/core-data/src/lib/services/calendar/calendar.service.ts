import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Calendar } from '@webapp/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  model = 'calendars';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Calendar[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Calendar>(this.getUrlWithId(id));
  }

  update(calendar: Calendar) {
    return this.http.put(this.getUrlWithId(calendar.id), calendar);
  }

  updateAll(calendars: Calendar[]) {
    return this.http.put(this.getUrl(), calendars);
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
