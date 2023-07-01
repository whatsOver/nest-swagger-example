import { ApiProperty } from '@nestjs/swagger';

export class UpdateDeveloperDto {
  @ApiProperty({
    description: 'userId',
    example: 'b9a8f8f5-a5e1-4648-94a2-a3f64d0027a9',
  })
  userId!: string;

  @ApiProperty({
    description: 'name',
    example: '장동현',
  })
  name!: string;

  @ApiProperty({
    description: 'position',
    example: 'Frontend Developer',
  })
  position: string;

  @ApiProperty({
    description: 'techStacks',
    example: '["React", "TypeScript", "JavaScript"]',
  })
  techStacks: string[];
}
