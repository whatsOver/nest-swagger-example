import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    type: String,
    example: 'ww8007',
    description: '사용자 아이디',
  })
  userId!: string;

  @ApiProperty({
    type: String,
    example: 'ww8007@gmail.com',
    description: '사용자 이메일',
  })
  email!: string;

  @ApiProperty({
    type: String,
    example: 'password',
    description: '사용자 비밀번호',
  })
  password!: string;

  @ApiProperty({
    type: String,
    example: 'token',
    description: '사용자 토큰',
  })
  currentRefreshToken!: string;

  @ApiProperty({
    type: Date,
    example: '2021-01-01',
    description: '사용자 토큰 만료 날짜',
  })
  currentRefreshTokenExp!: Date;
}
