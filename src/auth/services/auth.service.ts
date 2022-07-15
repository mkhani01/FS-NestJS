import { HttpException, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUserName(username);
    if (userDB && userDB.password === password) {
      return userDB;
    } else {
      return null;
    }
  }
}
