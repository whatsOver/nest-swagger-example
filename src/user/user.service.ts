import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as fs from 'fs';
import { User } from './interface/user';
import { UpdateTokenDto } from './dto/update-user.dto';
import { join } from 'path';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private readonly filePath = join(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? 'app' : 'dist',
    'data',
    'users.json',
  );

  private readUsersFromFile() {
    console.log(process.env.NODE_ENV);
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as User[];
  }

  private writeUsersToFile(users: User[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
  }

  getUsers() {
    return this.readUsersFromFile();
  }

  async getUser(userId: number) {
    const users = this.readUsersFromFile();
    return users.find((user) => user.userId === Number(userId));
  }

  async getUserByEmail(email: string) {
    const users = this.readUsersFromFile();
    return users.find((user) => user.email === email);
  }

  async createUser(dto: CreateUserDto) {
    const users = this.readUsersFromFile();
    const duplicateUser = await this.getUserByEmail(dto.email);
    if (duplicateUser) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const password = await bcrypt.hash(dto.password, 10);
    const newUser: User = {
      userId: users.length + 1,
      registeredAt: new Date(),
      currentRefreshToken: '',
      currentRefreshTokenExp: new Date(),
      email: dto.email,
      name: dto.name,
      password,
    };
    const newUsers = [...users, newUser];
    this.writeUsersToFile(newUsers);
    return newUser;
  }

  async tokenUpdate(updateData: UpdateTokenDto) {
    const users = this.readUsersFromFile();
    const userIndex = users.findIndex(
      (user) => user.userId === updateData.userId,
    );
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updateData };
      this.writeUsersToFile(users);
    }
  }
}
