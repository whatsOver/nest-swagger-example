import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { TodoDto } from './dto/todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private readonly filePath = join(__dirname, 'todo.json');

  private readTodos(): TodoDto[] {
    try {
      const data = readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private writeTodos(todos: TodoDto[]): void {
    writeFileSync(this.filePath, JSON.stringify(todos, null, 2), 'utf8');
  }

  getTodos(): TodoDto[] {
    return this.readTodos();
  }

  createTodo(createTodoDto: CreateTodoDto): TodoDto {
    const todos = this.readTodos();
    const newTodo: TodoDto = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: createTodoDto.title,
      isCompleted: false,
    };
    todos.push(newTodo);
    this.writeTodos(todos);
    return newTodo;
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto): TodoDto {
    const todos = this.readTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.isCompleted = updateTodoDto.isCompleted;
    this.writeTodos(todos);
    return todo;
  }

  deleteTodo(id: number): TodoDto {
    const todos = this.readTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.writeTodos(newTodos);
    return todo;
  }
}
