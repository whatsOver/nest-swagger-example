import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { faker } from '@faker-js/faker';
import { createRandomUser } from './util/user';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  /**
   * 유저 정보 조회
   */
  getUser(dto: UserDto) {
    console.log(dto);
    return createRandomUser();
  }

  /**
   * 유저 리스트 조회
   */
  getUsers() {
    return faker.helpers.multiple(createRandomUser, {
      count: 5,
    });
  }

  /**
   * 유저 정보 생성
   */
  createUser(dto: CreateUserDto) {
    console.log(dto);
    return createRandomUser();
  }
}
