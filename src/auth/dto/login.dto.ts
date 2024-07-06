import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    type: String,
    example: 'wshmin1234@gmail.com',
    description: '사용자 이메일',
  })
  email!: string;

  @ApiProperty({
    type: String,
    example: '1234',
    description: '사용자 비밀번호',
  })
  password!: string;
}
