import { TodoDto } from '../dto/todo.dto';

export interface TodoData {
  [userId: number]: TodoDto[];
}
