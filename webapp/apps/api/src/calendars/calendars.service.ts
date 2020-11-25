import { Calendar } from '@webapp/api-interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarsService {
  mockCalendars: Calendar[] = [
    {
      id: '1',
      name: 'TOTAL BODY CIRCUIT',
      description: 'desc',
      nextEvent: new Date('2020-12-7'),
    },
    {
      id: '2',
      name: 'ZUMBA',
      description: 'desc',
      nextEvent: new Date('2020-12-8'),
    },
    {
      id: '3',
      name: 'SILVERSNEAKERS',
      description: 'desc',
      nextEvent: new Date('2020-12-8'),
    },
    {
      id: '4',
      name: 'CYCLE',
      description: 'desc',
      nextEvent: new Date('2020-12-14'),
    },
    {
      id: '5',
      name: 'BODYPUMP',
      description: 'desc',
      nextEvent: new Date('2020-12-15'),
    },
  ];

  findAll() {
    return this.mockCalendars;
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
