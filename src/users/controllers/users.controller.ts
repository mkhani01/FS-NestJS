import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';
import { HttpExceptionFilter } from 'src/ExceptionHandler/http-exceptions.filter';
import { userAndOwnerInfo, UserInfoType } from 'src/utils/user.decorator';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/search')
  async search(
    @userAndOwnerInfo() userInfo: UserInfoType,
    @Paginate() query: PaginateQuery,
  ) {
    return this.usersService.search(userInfo.owner.id, query);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/search/:id')
  @UseFilters(new HttpExceptionFilter())
  async findById(
    @Param('id', ParseIntPipe) id: number,
    @userAndOwnerInfo() userInfo: UserInfoType,
  ) {
    const user = await this.usersService.findById(id, userInfo.owner.id);
    if (user) return user;
    else throw new HttpException('user not found !', HttpStatus.NOT_FOUND);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createUserDto: CreateUserDto,
    @userAndOwnerInfo() userInfo: UserInfoType,
  ) {
    return this.usersService.create(createUserDto, userInfo.owner.id);
  }

  @Get('/getCurrent')
  async getCurrentUser(@userAndOwnerInfo() userInfo: UserInfoType) {
    const user = await this.usersService.getCurrentUser(
      userInfo.user.id,
      userInfo.owner.id,
    );
    if (user) return user;
    else throw new HttpException('user not found !', HttpStatus.NOT_FOUND);
  }
}
