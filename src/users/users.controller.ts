import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
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
        if(user) return user;
        else throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    }
}