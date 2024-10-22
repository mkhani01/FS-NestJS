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
import { userAndOwnerInfo, UserInfoType } from 'src/utils/user.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  constructor(
    @Inject('ROLES_SERVICE') private readonly rolesService: RolesService,
  ) {}

  @Get('/search')
  async search(@userAndOwnerInfo() userInfo: UserInfoType) {
    return this.rolesService.search(userInfo.owner.id);
  }

  @Get(`/search/:id`)
  async findById(
    @Param('id', ParseIntPipe) id: number,
    @userAndOwnerInfo() userInfo: UserInfoType,
  ) {
    const role = await this.rolesService.findById(id, userInfo.owner.id);
    if (role) return role;
    else throw new HttpException('user not found !', HttpStatus.NOT_FOUND);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createRoleDto: CreateRoleDto,
    @userAndOwnerInfo() userInfo: UserInfoType,
  ) {
    return this.rolesService.create(createRoleDto, userInfo.owner.id);
  }
}
