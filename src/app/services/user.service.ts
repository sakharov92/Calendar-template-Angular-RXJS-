import {Injectable} from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private users: {id: User} | {} = {};
  private associativeWithTeamList: {teamId: string[]} | {} = {};

  addUser(teamId, userId, name): void {
    this.users[userId] = {
      name, teamId
    };
    this.associateWithTeam(teamId, userId);
  }
  associateWithTeam(teamId, userId): void {
    if (this.associativeWithTeamList.hasOwnProperty(teamId)) {
     this.associativeWithTeamList[teamId].push(userId);
    } else {
      this.associativeWithTeamList[teamId] = [userId];
    }
  }
  // getUsers(): Observable<User[]> {}

  // getUserById(): Observable<User>
}
