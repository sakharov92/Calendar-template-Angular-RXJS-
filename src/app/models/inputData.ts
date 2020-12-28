import { RowTeam } from './team';
import { RowUser } from './user';
import { Vacation } from './vacation';

export interface InputData {
  teams: RowTeam[];
  users: RowUser[];
  vacations: Vacation[];
}
