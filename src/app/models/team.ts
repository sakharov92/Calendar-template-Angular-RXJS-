import {User, UserRealm} from './user';

export interface Team {
    realm: UserRealm;
    percentageOfAbsent: number[];
    participants: User[];
}
export interface RowTeam {
  name: string;
  percentageOfAbsent: number[];
  id: number;
}

