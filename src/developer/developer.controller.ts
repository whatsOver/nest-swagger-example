import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeveloperDto, DeveloperListDto } from './dto/developer.dto';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@ApiTags('developer')
@Controller('developer')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}
  @Get()
  @ApiOperation({
    summary: '개발자 정보 조회',
    description: '개발자 정보를 조회합니다.',
  })
  getDeveloper(@Query() param: DeveloperDto) {
    return this.developerService.getDeveloper(param);
  }

  @Get('list')
  @ApiOperation({
    summary: '개발자 리스트 조회',
    description: '개발자 리스트를 조회합니다.',
  })
  getDevelopers(@Query() param: DeveloperListDto) {
    return this.developerService.getDevelopers(param.size);
  }

  @Post('create')
  @ApiOperation({
    summary: '개발자 정보 생성',
    description: '개발자 정보를 생성합니다.',
  })
  createDeveloper(@Body() body: CreateDeveloperDto) {
    return this.developerService.createDeveloper(body);
  }

  @Put()
  @ApiOperation({
    summary: '개발자 정보 수정',
    description: '개발자 정보를 수정합니다.',
  })
  updateDeveloper(@Body() body: UpdateDeveloperDto) {
    return this.developerService.updateDeveloper(body);
  }

  @Delete()
  @ApiOperation({
    summary: '개발자 정보 삭제',
    description: '개발자 정보를 삭제합니다.',
  })
  deleteDeveloper(@Query('userId') userId: string) {
    return this.developerService.deleteDeveloper(userId);
  }
}
