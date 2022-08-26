import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { GlobalService } from 'src/global/services/global.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
    private jwtService: JwtService,
    @Inject('GLOBAL_SERVICE') private readonly globalService: GlobalService,
  ) {}
  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUserName(username);
    if (userDB) {
      const isMatch = await bcrypt.compare(password, userDB.password);
      if (isMatch) {
        return userDB;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  async login(user: any) {
    const userDB = await this.userService.findUserByUserName(user.username);
    delete userDB.password;
    //Hint : The default owner is set now , in feature there will be a feature to select owner
    const tokenData = {
      id: userDB.id,
      username: userDB.username,
    };
    const payload = { tokenData, owner: userDB.defaultOwner };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
