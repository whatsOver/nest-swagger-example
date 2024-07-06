import { Request } from 'express';
import { AccessTokenPayload } from './token';

export interface RequestWithUser extends Request {
  user: AccessTokenPayload;
}
