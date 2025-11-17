export interface IUser {
  id: string;
  email: string;
  roles: string[];
  [key: string]: any;
}
