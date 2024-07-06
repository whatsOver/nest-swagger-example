import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({
    type: Boolean,
    description: 'The completed status of the todo',
    example: true,
  })
  isCompleted: boolean;
}
