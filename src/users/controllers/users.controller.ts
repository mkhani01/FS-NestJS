import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpException,
    HttpStatus, Inject,
    Param,
    Post, UseFilters, UseInterceptors,
    UsePipes,
    ValidationPipe,
    ParseIntPipe
} from '@nestjs/common';
import {CreateUserDto} from '../dtos/create-user.dto';
import {UsersService} from "../services/users.service";
import {HttpExceptionFilter} from "../../ExceptionHandler/http-exceptions.filter";


@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly usersService: UsersService) {
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/search')
    async search() {
        return this.usersService.search();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/search/:id')
    @UseFilters(new HttpExceptionFilter())
    async findById(@Param('id', ParseIntPipe) id: number) {
        const user = await this.usersService.findById(id);
        if (user) return user;
        else throw new HttpException("user not found !", HttpStatus.NOT_FOUND);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}
