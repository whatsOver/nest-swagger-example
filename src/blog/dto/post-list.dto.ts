import { ApiProperty } from '@nestjs/swagger';

export class PostListDto {
  @ApiProperty({
    description: 'page number',
    example: 1,
  })
  page!: number;

  @ApiProperty({
    description: 'page size',
    example: 10,
  })
  size!: number;
}
