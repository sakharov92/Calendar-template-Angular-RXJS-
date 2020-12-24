import {Injectable} from '@angular/core';
import { User } from '../models/user';
import {Subject} from 'rxjs';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'FE_Team_User1',
      teamId: 1
    },
    {
      id: 2,
      name: 'FE_Team_User2',
      teamId: 1
    },
    {
      id: 3,
      name: 'Des_Team_User1',
      teamId: 2
    },
    {
      id: 4,
      name: 'Des_Team_User2',
      teamId: 2
    },
    {
      id: 5,
      name: 'BE_Team_User1',
      teamId: 3
    },
    {
      id: 6,
      name: 'BE_Team_User2',
      teamId: 3
    },
    {
      id: 7,
      name: 'Man_Team_User1',
      teamId: 4
    },
    {
      id: 8,
      name: 'Man_Team_User2',
      teamId: 4
    },
  ];
  getUsers(): User[] {
    return this.users;
  }
  getUserById(userId): User {
    return this.users.find((element) => {
      return userId === element.id;
    });
  }
  // getUsers(): Observable<User[]> {}

  // getUserById(): Observable<User>
}
