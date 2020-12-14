import { Calendar } from '@webapp/api-interfaces';
import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_ENDPOINT = 'http://localhost:8080';

@Injectable()
export class CalendarsService {
  mockCalendars: Calendar[] = [
    {
      id: '1',
      name: 'TOTAL BODY CIRCUIT',
      monitor: false,
    },
    {
      id: '2',
      name: 'ZUMBA',
      monitor: false,
    },
    {
      id: '3',
      name: 'SILVERSNEAKERS',
      monitor: false,
    },
    {
      id: '4',
      name: 'CYCLE',
      monitor: false,
    },
    {
      id: '5',
      name: 'BODYPUMP',
      monitor: false,
    },
    {
      id: '6',
      name: 'GENTLE YOGA',
      monitor: false,
    },
    {
      id: '7',
      name: 'POWER YOGA',
      monitor: false,
    },
    {
      id: '8',
      name: 'BODYPUMP',
      monitor: false,
    },
    {
      id: '9',
      name: 'AQUA FIT',
      monitor: false,
    },
    {
      id: '10',
      name: 'STRENGTH',
      monitor: false,
    },
    {
      id: '11',
      name: 'CARDIO BLAST',
      monitor: false,
    },
    {
      id: '12',
      name: 'BASKETBALL',
      monitor: true,
    },
  ];

  constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<Calendar[]>> {
    return this.httpService
      .get(`${API_ENDPOINT}/calendars/available`)
      .pipe(map((response) => response.data));
  }

  findOne(id: string) {
    return this.mockCalendars.find((calendar) => calendar.id === id);
  }

  update(id: string, calendar: Calendar) {
    this.mockCalendars = this.mockCalendars.map((c) =>
      c.id === id ? calendar : c
    );
    return this.mockCalendars;
  }

  remove(id: string) {
    this.mockCalendars = this.mockCalendars.filter(
      (calendar) => calendar.id !== id
    );
    return this.mockCalendars;
  }
}
