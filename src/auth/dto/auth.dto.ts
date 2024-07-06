import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    type: String,
    description: '사용자의 이메일',
    example: 'wshmin1234@gmail.com',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: '사용자의 비밀번호',
    example: '1234',
  })
  password: string;
}
