import { Configuration } from '@webapp/api-interfaces';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get()
  get() {
    return this.configurationService.get();
  }

  @Post()
  update(@Body() configuration: Configuration) {
    return this.configurationService.update(configuration);
  }
}
