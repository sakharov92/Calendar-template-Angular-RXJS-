import {OldUser, UserRealm} from './user';

export interface Team {
    name: string;
    percentageOfAbsent: number[];
    id: number;
}
export interface OldTeam {
  realm: UserRealm;
  percentageOfAbsent: number[];
  participants: OldUser[];
}
