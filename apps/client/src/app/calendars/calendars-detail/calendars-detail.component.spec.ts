import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsDetailComponent } from './calendars-detail.component';

describe('CalendarsDetailComponent', () => {
  let component: CalendarsDetailComponent;
  let fixture: ComponentFixture<CalendarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
