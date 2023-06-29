import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: '유저 정보 조회',
    description: '유저 정보를 조회합니다.',
  })
  getUser(@Query() param: UserDto) {
    return this.userService.getUser(param);
  }

  @Post()
  @ApiOperation({
    summary: '유저 정보 생성',
    description: '유저 정보를 생성합니다.',
  })
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Get('list')
  @ApiOperation({
    summary: '유저 리스트 조회',
    description: '유저 리스트를 조회합니다.',
  })
  getUsers() {
    return this.userService.getUsers();
  }
}
