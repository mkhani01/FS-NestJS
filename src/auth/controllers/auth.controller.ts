import {
  Controller,
  Post,
  Request,
  Inject,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { Public } from 'src/utils/Public.Meta';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
