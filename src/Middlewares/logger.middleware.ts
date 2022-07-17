import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    if (req.method === 'GET') {
      console.info(
        'Request to path: \n' +
          req.route.path +
          '\n with method : \n ' +
          req.method,
      );
    } else {
      console.info(
        '\x1b[34m%s\x1b[0m',
        'Request to path: \n' +
          req.route.path +
          '\n with method : \n ' +
          req.method +
          '\n and body: \n ' +
          JSON.stringify(req.body),
      );
    }
    next();
  }
}
