import { Log } from '@webapp/api-interfaces';
import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_ENDPOINT = 'http://localhost:8080';

@Injectable()
export class LogsService {
  mockLogs: Log[] = [
    {
      info: 'info',
    },
    {
      info: 'info',
    },
    {
      info: 'info',
    },
    {
      info: 'info',
    },
    {
      info: 'info',
    },
    {
      info: 'info',
    },
    {
      info: 'info',
    },
  ];

  constructor(private httpService: HttpService) {}

  // findAll(): Observable<AxiosResponse<Log[]>> {
  //   return this.httpService
  //     .get(`${API_ENDPOINT}/logs/`)
  //     .pipe(map((response) => response.data));
  // }

  findAll(): Log[] {
    return this.mockLogs;
  }
}
