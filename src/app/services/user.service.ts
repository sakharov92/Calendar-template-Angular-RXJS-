import {Injectable} from '@angular/core';
import { RowUser } from '../models/user';
import { HttpService } from './http.service';

@Injectable()
export class UserService {
  users: RowUser[];
  currentData;
  /*private users: RowUser[] = [
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
  ];*/
  /*constructor(private httpService: HttpService) {
    //this.users = this.httpService.getDataByName('users');
    //this.users = this.httpService.data.users;
  }*/
  /*constructor(private httpService: HttpService) {
    this.httpService.dataStream$.subscribe(data => {
      this.currentData = data;
      this.users = this.currentData.data.users;
    });
  }*/
  setUsers(users): void {
    this.users = users;
  }
  getUsers(): RowUser[] {
    return this.users;
  }
  getUserById(userId): RowUser {
    return this.users.find((element) => {
      return userId === element.id;
    });
  }
}
