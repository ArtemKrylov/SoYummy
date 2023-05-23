import { IUser } from './user';

export interface ISetCredentialsAction {
  user: IUser | null;
  accessToken: string | null;
}
