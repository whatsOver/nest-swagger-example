import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    type: String,
    description: '할 일 제목',
    example: '프로젝트 설계하기',
  })
  title: string;
}
