export interface User {
  id: number;
  name: string;
  teamId: number;
}

export enum UserRealm {
  FRONT_END = 'fe',
  BACK_END = 'be',
  DESIGNER = 'designer',
}

export interface OldUser {
  id: number;
  name: string;
  email: string;
  role: string;
  realm: UserRealm;
}
