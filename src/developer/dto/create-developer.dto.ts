import { ApiProperty } from '@nestjs/swagger';

export class CreateDeveloperDto {
  @ApiProperty({
    description: 'userId',
    example: 1,
  })
  userId: string;

  @ApiProperty({
    description: 'position',
    example: 'Frontend Developer',
  })
  position: string;

  @ApiProperty({
    description: 'techStacks',
    example: '[React, TypeScript, JavaScript]',
  })
  techStacks: string[];
}
