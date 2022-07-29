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
    //Hint : The owner is first owner of the database for now , later user will select owner and
    // there will be a default owner for each user
    const payload = { userDB, owner: userDB.owners[0] };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
