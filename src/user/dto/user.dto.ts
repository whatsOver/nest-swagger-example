import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: '1',
    description: '사용자 아이디',
  })
  userId!: number;
}
