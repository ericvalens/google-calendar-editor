import { Component, OnInit } from '@angular/core';
import { Log } from '@webapp/api-interfaces';
import { LogsService } from '@webapp/core-data';

@Component({
  selector: 'webapp-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadLogs();
  }

  loadLogs() {
    this.logsService.all().subscribe((logs) => (this.logs = logs));
  }
}
