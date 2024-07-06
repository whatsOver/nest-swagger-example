export interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export interface AccessTokenPayload {
  userId: number;
  email: string;
}

export interface RefreshTokenPayload {
  userId: number;
  email: string;
}
