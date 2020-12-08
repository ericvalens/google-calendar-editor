import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarService } from '@webapp/core-data';
import { Calendar } from '@webapp/api-interfaces';
import { Observable } from 'rxjs';

const emptyCalendar: Calendar = {
  id: null,
  name: '',
  monitor: false,
};

@Component({
  selector: 'webapp-calendars-detail',
  templateUrl: './calendars-detail.component.html',
  styleUrls: ['./calendars-detail.component.scss'],
})
export class CalendarsDetailComponent implements OnInit, OnDestroy {
  calendar: Calendar;
  id: string;
  sub;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private calendarService: CalendarService
  ) {}

  ngOnInit() {
    this.calendar = emptyCalendar;
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      const calendars$: Observable<Calendar[]> = this.calendarService.all();
      calendars$.subscribe(
        (calendars: Calendar[]) =>
          (this.calendar = calendars.find((c) => this.id === c.id))
      );
    });
  }

  onBack(): void {
    this.router.navigate(['calendar']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
