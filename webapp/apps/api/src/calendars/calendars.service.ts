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
    {
      id: '6',
      name: 'GENTLE YOGA',
      description: 'desc',
      nextEvent: new Date('2020-12-17'),
    },
    {
      id: '7',
      name: 'POWER YOGA',
      description: 'desc',
      nextEvent: new Date('2020-12-18'),
    },
    {
      id: '8',
      name: 'BODYPUMP',
      description: 'desc',
      nextEvent: new Date('2020-12-19'),
    },
    {
      id: '9',
      name: 'AQUA FIT',
      description: 'desc',
      nextEvent: new Date('2020-12-20'),
    },
    {
      id: '10',
      name: 'STRENGTH',
      description: 'desc',
      nextEvent: new Date('2020-12-21'),
    },
    {
      id: '11',
      name: 'CARDIO BLAST',
      description: 'desc',
      nextEvent: new Date('2020-12-21'),
    },
    {
      id: '12',
      name: 'BASKETBALL',
      description: 'desc',
      nextEvent: new Date('2020-12-22'),
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
