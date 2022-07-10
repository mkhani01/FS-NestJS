import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpException,
    HttpStatus, Inject,
    Param,
    Post, UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {CreateUserDto} from '../dtos/create-user.dto';
import {UsersService} from "../services/users.service";


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
    async findById(@Param('id') id: string) {
        const user = await this.usersService.findById(id);
        if (user) return user;
        else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

}
