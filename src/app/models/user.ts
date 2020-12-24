import { Vacation } from './vacation';

export enum UserRealm {
  FRONT_END = 'fe',
  BACK_END = 'be',
  DESIGNER = 'designer',
  MANAGER = 'manager'
}

export interface User {
  id: number;
  name: string;
  teamId: number;
  //vacations: Array<Vacation>;
}
