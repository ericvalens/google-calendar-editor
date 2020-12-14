import { Component, OnInit } from '@angular/core';
import { Configuration } from '@webapp/api-interfaces';
import { ConfigurationService } from '@webapp/core-data';

const emptyConfiguration: Configuration = {
  originalText: '',
  replacementText: '',
  updatePeriodValue: -1,
  updatePeriodUnit: '',
  queryPeriodValue: -1,
  queryPeriodUnit: '',
};

@Component({
  selector: 'webapp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  units: string[] = new Array('MILLISECONDS', 'SECONDS', 'MINUTES', 'HOURS');
  configuration: Configuration;

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.configuration = emptyConfiguration;
    this.loadConfiguration();
  }

  loadConfiguration() {
    this.configurationService
      .get()
      .subscribe((configuration) => (this.configuration = configuration));
  }

  saveConfiguration() {
    this.configurationService.update(this.configuration);
  }
}
