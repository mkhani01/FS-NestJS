import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUserName(username);
    if (userDB && userDB.password === password) {
      return userDB;
    } else {
      return null;
    }
  }
  async login(user: any) {
    const userDB = await this.userService.findUserByUserName(user.username);
    const payload = { userDB, owner: userDB.owner[0] };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
