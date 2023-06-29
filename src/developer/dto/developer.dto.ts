import { ApiProperty } from '@nestjs/swagger';

export class DeveloperDto {
  @ApiProperty({
    description: 'userId',
    example: 1,
  })
  userId!: string;
}

export class DeveloperListDto {
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
