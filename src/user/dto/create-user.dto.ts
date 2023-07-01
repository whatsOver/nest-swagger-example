import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'username',
    example: '장동현',
  })
  name!: string;

  @ApiProperty({
    description: 'email',
    example: 'wshmin1234@gmail.com',
  })
  email!: string;

  @ApiProperty({
    description: 'password',
    example: '1234',
  })
  password!: number;
}
