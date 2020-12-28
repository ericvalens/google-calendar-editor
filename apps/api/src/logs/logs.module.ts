import { Module, HttpModule } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';

@Module({
  imports: [HttpModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
