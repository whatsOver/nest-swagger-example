import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty({
    example: '041c8e17-bdb5-4a4a-8c46-873b680bb8f8',
    description: '게시글 아이디',
  })
  postId!: string;
}

export class UpdatePostDto {
  @ApiProperty({
    description: 'postId',
    example: 'b9a8f8f5-a5e1-4648-94a2-a3f64d0027a9',
  })
  postId!: number;

  @ApiProperty({
    description: 'title',
    example: '제목',
  })
  title!: string;

  @ApiProperty({
    description: 'content',
    example: '내용',
  })
  content!: string;
}

export class DeletePostDto {
  @ApiProperty({
    description: 'postId',
    example: 'b9a8f8f5-a5e1-4648-94a2-a3f64d0027a9',
  })
  postId!: string;
}
