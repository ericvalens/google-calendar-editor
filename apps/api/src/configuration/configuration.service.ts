import { Configuration } from '@webapp/api-interfaces';
import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_ENDPOINT = 'http://localhost:8080';

@Injectable()
export class ConfigurationService {
  constructor(private httpService: HttpService) {}

  get(): Observable<AxiosResponse<Configuration>> {
    return this.httpService
      .get(`${API_ENDPOINT}/configuration`)
      .pipe(map((response) => response.data));
  }

  update(
    configuration: Configuration
  ): Observable<AxiosResponse<Configuration>> {
    return this.httpService
      .post(`${API_ENDPOINT}/configuration`, configuration)
      .pipe(map((response) => response.data));
  }
}
