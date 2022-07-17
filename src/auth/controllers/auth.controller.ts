import { Controller, Post, Request, Inject } from '@nestjs/common';
import { Public } from 'src/utils/Public.Meta';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
