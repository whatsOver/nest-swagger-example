import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { BlogModule } from './blog/blog.module';
import { DeveloperModule } from './developer/developer.module';

@Module({
  imports: [UserModule, BlogModule, DeveloperModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
