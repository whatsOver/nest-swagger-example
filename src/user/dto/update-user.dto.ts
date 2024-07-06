export interface UpdateTokenDto {
  userId: number;
  currentRefreshToken?: string;
  currentRefreshTokenExp: Date;
}
