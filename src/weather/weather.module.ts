import { Module } from '@nestjs/common';
import { OwnersService } from './weather.service';

@Module({
  providers: [OwnersService],
  exports: [OwnersService],
})
export class OwnersModule {}
