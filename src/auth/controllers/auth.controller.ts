import { Controller, Post, Inject, UseGuards, Body } from '@nestjs/common';
import { Public } from 'src/utils/Public.Meta';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dtos/login.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Public()
  @Post('login')
  async login(@Body() loginInfo: LoginDto) {
    return this.authService.login(loginInfo);
  }
}
