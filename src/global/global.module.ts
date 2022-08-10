import { Global, Module } from '@nestjs/common';
import { GlobalService } from './services/global.service';

@Global()
@Module({
  providers: [
    {
      provide: 'GLOBAL_SERVICE',
      useClass: GlobalService,
    },
  ],
  exports: [
    {
      provide: 'GLOBAL_SERVICE',
      useClass: GlobalService,
    },
  ],
})
export class GlobalModule {}
