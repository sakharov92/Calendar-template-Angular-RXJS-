import {OldTeam} from './app/models/team';
import {UserRealm} from './app/models/user';

export const teams: OldTeam[] = [
  {
    realm: UserRealm.FRONT_END,
    percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    participants: [
      {
        id: 1,
        name: 'FE_Team_User1',
        email: 'User1_email',
        role: 'Frontend developer',
        realm: UserRealm.FRONT_END
      },
      {
        id: 2,
        name: 'FE_Team_User2',
        email: 'User2_email',
        role: 'Frontend developer',
        realm: UserRealm.FRONT_END
      }
    ]
  },
  {
    realm: UserRealm.BACK_END,
    percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    participants: [
      {
        id: 3,
        name: 'BE_Team_User1',
        email: 'User1_email',
        role: 'Backend developer',
        realm: UserRealm.BACK_END
      },
      {
        id: 4,
        name: 'BE_Team_User2',
        email: 'User2_email',
        role: 'Backend developer',
        realm: UserRealm.BACK_END
      }
    ]
  },
  {
    realm: UserRealm.DESIGNER,
    percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    participants: [
      {
        id: 5,
        name: 'DES_Team_User1',
        email: 'User1_email',
        role: 'Designer',
        realm: UserRealm.DESIGNER
      },
      {
        id: 6,
        name: 'DES_Team_User2',
        email: 'User2_email',
        role: 'Designer',
        realm: UserRealm.DESIGNER
      }
    ]
  }];
