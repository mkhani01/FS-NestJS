import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OwnerService } from '../services/owner.service';
import { CreateOwnerDto } from '../dtos/create-owner.dto';
import { Public } from 'src/utils/Public.Meta';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Owners')
@Controller('owner')
export class OwnerController {
  constructor(
    @Inject('OWNER_SERVICE') private readonly ownerService: OwnerService,
  ) {}

  @Get('/search')
  async search() {
    await this.ownerService.search();
  }

  @Public()
  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }
}
