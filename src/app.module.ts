import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { BlogModule } from './blog/blog.module';
import { DeveloperModule } from './developer/developer.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [UserModule, BlogModule, DeveloperModule, TodoModule],
  controllers: [TodoController, UserController],
  providers: [UserService, TodoService],
})
export class AppModule {}
