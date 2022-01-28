import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserRole } from '../users/entities/user.entity';
import { QueryContentDto } from './dto/query-content-dto';
import { DbOptions } from '../common/decorator/dbOptions.decorator';
import xss from 'xss';
import { Auth } from '../common/decorator/auth.decorator';

@ApiTags('内容')
@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Auth([UserRole.Admin])
  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    // xss
    createContentDto.title = xss(createContentDto.title);
    createContentDto.content = xss(createContentDto.content);
    createContentDto.contentOutline = xss(createContentDto.contentOutline);
    return this.contentsService.create(createContentDto);
  }

  @Get()
  findAll(@Query() query: QueryContentDto, @DbOptions() dbOptions) {
    return this.contentsService.findAll(query, dbOptions);
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string, @DbOptions() dbOptions) {
    return this.contentsService.findOne(id, dbOptions);
  }

  @Auth([UserRole.Admin])
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentsService.update(id, updateContentDto);
  }

  @Auth([UserRole.Admin])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentsService.remove(id);
  }
}
