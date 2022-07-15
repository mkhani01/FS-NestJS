import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { CreateRoleDto } from '../dtos/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(
    @Inject('ROLES_SERVICE') private readonly rolesService: RolesService,
  ) {}

  @Get('/search')
  async search() {
    return await this.rolesService.search();
  }

  @Get(`/search/:id`)
  async findById(@Param('id', ParseIntPipe) id: number) {
    const role = await this.rolesService.findById(id);
    if (role) return role;
    else throw new HttpException('user not found !', HttpStatus.NOT_FOUND);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }
}
