import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  async test() {
    return 'test';
  }
}
