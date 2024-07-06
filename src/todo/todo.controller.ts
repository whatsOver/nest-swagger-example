import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { RequestWithUser } from 'src/auth/interface/request';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAccessTokenGuard)
  @Get()
  @ApiOperation({ summary: '모든 할 일 목록 조회' })
  @ApiResponse({ type: [TodoDto] })
  getTodos(@Req() req: RequestWithUser): TodoDto[] {
    return this.todoService.getTodos(req.user.userId);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Post()
  @ApiOperation({ summary: '할 일 생성' })
  @ApiResponse({ type: TodoDto })
  createTodo(
    @Req() req: RequestWithUser,
    @Body() createTodoDto: CreateTodoDto,
  ): TodoDto {
    return this.todoService.createTodo(req.user.userId, createTodoDto);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Put(':id')
  @ApiOperation({ summary: '할 일 수정' })
  @ApiResponse({ type: TodoDto })
  updateTodo(
    @Req() req: RequestWithUser,
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): TodoDto {
    return this.todoService.updateTodo(
      req.user.userId,
      parseInt(id),
      updateTodoDto,
    );
  }

  @UseGuards(JwtAccessTokenGuard)
  @Delete(':id')
  @ApiOperation({ summary: '할 일 삭제' })
  @ApiResponse({ type: Boolean })
  deleteTodo(@Req() req: RequestWithUser, @Param('id') id: string): boolean {
    return this.todoService.deleteTodo(req.user.userId, parseInt(id));
  }
}
