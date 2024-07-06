export interface User {
  userId: number;
  name: string;
  email: string;
  password: string;
  registeredAt: Date;
  currentRefreshToken: string;
  currentRefreshTokenExp: Date;
}
