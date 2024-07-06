import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({ summary: '모든 할 일 목록 조회' })
  @ApiResponse({ type: [TodoDto] })
  getTodos(): TodoDto[] {
    return this.todoService.getTodos();
  }

  @Post()
  @ApiOperation({ summary: '할 일 생성' })
  @ApiResponse({ type: TodoDto })
  createTodo(@Body() createTodoDto: CreateTodoDto): TodoDto {
    return this.todoService.createTodo(createTodoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: '할 일 수정' })
  @ApiResponse({ type: TodoDto })
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): TodoDto {
    return this.todoService.updateTodo(parseInt(id), updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '할 일 삭제' })
  @ApiResponse({ type: TodoDto })
  deleteTodo(@Param('id') id: string): TodoDto {
    return this.todoService.deleteTodo(parseInt(id));
  }
}
