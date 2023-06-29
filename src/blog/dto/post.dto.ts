import { ApiProperty } from '@nestjs/swagger';

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
