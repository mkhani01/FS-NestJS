import {Body, Controller, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto} from './dtos/create-user.dto';
import {UsersService} from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get('/search')
    async search() {
        return this.usersService.search();
    }

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
