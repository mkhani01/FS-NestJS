import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import jwt_decode from 'jwt-decode';

export const OwnerId = createParamDecorator(
  (_data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const decodedToken: any = jwt_decode(request.headers.authorization);
    return decodedToken ? decodedToken.owner.id : 'UNAUTHORIZED';
  },
);
