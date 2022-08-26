import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import jwt_decode from 'jwt-decode';

export function decodeToken(token: string) {
  return jwt_decode(token);
}

export const userAndOwnerInfo = createParamDecorator(
  (_data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const decodedToken: any = decodeToken(request.headers.authorization);
    const sendingInfo: UserInfoType = {
      user: {
        id: decodedToken.tokenData ? decodedToken.tokenData.id : 'UNAUTHORIZED',
      },
      owner: {
        id: decodedToken.owner ? decodedToken.owner.id : 'UNAUTHORIZED',
      },
    };
    return sendingInfo;
  },
);

export function getUserInfoFunc(token: string) {
  const decodedToken: any = decodeToken(token);
  const sendingInfo: UserInfoType = {
    user: {
      id: decodedToken.tokenData ? decodedToken.tokenData.id : 'UNAUTHORIZED',
    },
    owner: {
      id: decodedToken.owner ? decodedToken.owner.id : 'UNAUTHORIZED',
    },
  };
  return sendingInfo;
}

export interface UserInfoType {
  user: {
    id: number;
  };
  owner: {
    id: number;
  };
}
