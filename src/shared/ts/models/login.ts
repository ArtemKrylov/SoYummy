import { IUser } from './user';

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken?: string;
  refreshToken?: string;
  user?: IUser;
}
