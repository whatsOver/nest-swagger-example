import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { TodoDto } from './dto/todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoData } from './interface/todoData';

@Injectable()
export class TodoService {
  private readonly filePath = join(process.cwd(), 'src/data/todos.json');

  private readTodos(): TodoData {
    try {
      const data = readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private writeTodos(todos: TodoData): void {
    writeFileSync(this.filePath, JSON.stringify(todos, null, 2), 'utf8');
  }

  getTodos(userId: number): TodoDto[] {
    const todos = this.readTodos();
    return todos[userId];
  }

  createTodo(userId: number, createTodoDto: CreateTodoDto): TodoDto {
    const todos = this.readTodos();
    const newTodo: TodoDto = {
      id: todos[userId] ? todos[userId].length + 1 : 1,
      title: createTodoDto.title,
      isCompleted: false,
    };
    const newTodos: TodoData = {
      ...todos,
      [userId]: [...(todos[userId] || []), newTodo],
    };
    this.writeTodos(newTodos);
    return newTodo;
  }

  updateTodo(
    userId: number,
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): TodoDto {
    const todos = this.readTodos();
    const todo = todos[userId].find((todo) => todo.id === id);
    if (!todo) {
      throw new HttpException('수정할 할 일이 없습니다.', HttpStatus.NOT_FOUND);
    }
    const newTodo: TodoDto = {
      ...todo,
      isCompleted: updateTodoDto.isCompleted,
    };
    const newTodos: TodoData = {
      ...todos,
      [userId]: todos[userId].map((todo) => (todo.id === id ? newTodo : todo)),
    };
    this.writeTodos(newTodos);
    return todo;
  }

  deleteTodo(userId: number, id: number): boolean {
    const todos = this.readTodos();
    const todo = todos[userId].find((todo) => todo.id === id);
    if (!todo) {
      throw new HttpException('삭제할 할 일이 없습니다.', HttpStatus.NOT_FOUND);
    }
    const newTodos: TodoData = {
      ...todos,
      [userId]: (todos[userId] || []).filter((todo) => todo.id !== id),
    };
    this.writeTodos(newTodos);
    return true;
  }
}
