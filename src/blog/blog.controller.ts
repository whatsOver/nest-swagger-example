import { Body, Controller, Delete, Get, Put, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostListDto } from './dto/post-list.dto';
import { UpdatePostDto } from './dto/post.dto';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  @ApiOperation({
    summary: '블로그 정보 조회',
    description: '블로그 정보를 조회합니다.',
  })
  getBlog() {
    return this.blogService.getPost();
  }

  @Get('list')
  @ApiOperation({
    summary: '블로그 리스트 조회',
    description: '블로그 리스트를 조회합니다.',
  })
  getBlogs(@Query() param: PostListDto) {
    return this.blogService.getPosts(param.size);
  }

  @Put()
  @ApiOperation({
    summary: '블로그 정보 수정',
    description: '블로그 정보를 수정합니다.',
  })
  updateBlog(@Body() body: UpdatePostDto) {
    return this.blogService.updatePost(body);
  }

  @Delete()
  @ApiOperation({
    summary: '블로그 정보 삭제',
    description: '블로그 정보를 삭제합니다.',
  })
  deleteBlog(@Query('postId') postId: string) {
    return this.blogService.deletePost(postId);
  }
}
