import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty({
    type: Number,
    description: 'The id of the todo',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'The title of the todo',
    example: 'My first todo',
  })
  title: string;

  @ApiProperty({
    type: Boolean,
    description: 'The completed status of the todo',
    example: true,
  })
  isCompleted: boolean;
}
