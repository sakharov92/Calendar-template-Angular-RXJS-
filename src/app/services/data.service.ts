import {TeamInput} from '../models/input-data';
import {teams} from '../departmentTeams';
import { v1 as uuidv1 } from 'uuid';
import {Injectable} from '@angular/core';
import {Team} from '../models/team';
import {User} from '../models/user';
import {Vacation} from '../models/vacation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  teamsInput: TeamInput[] = teams;
  public teams: Map<string, Team>;
  private users: Map<string, User>;
  private associativeWithTeamList: {teamId: string[]} | {};
  vacations: {id: Vacation} | {} = {};
  private associativeListWithUser: {userId: string[]} | {};

  constructor() {
    this.teams = new Map();
    this.users = new Map();
    this.associativeWithTeamList = {};
    this.associativeListWithUser = {};
    this.vacations = {};
    for (let team of this.teamsInput) {
      const newTeamId = uuidv1();
      const members = team.members;
      this.addTeam(newTeamId, team.name, team.percentageOfAbsent);
      for(let member of members) {
        const newUserId = uuidv1();
        this.addUser(newTeamId, newUserId, member.name);
        for (let vacation of member.vacations) {
          const newVacationId = uuidv1();
          this.addVacation(newUserId, newVacationId, vacation.startDate, vacation.endDate, vacation.type);
        }
      }
    }
  }
  fillDataService() {

  }
  addTeam(id, name, percentageOfAbsent) {
    this.teams.set(id, {name, percentageOfAbsent});
  }
  getTeams(): Map<string, Team> {
    return this.teams;
  }
  getTeamById(teamId: string): Team {
    return this.teams.get(teamId);
  }
  addUser(teamId, userId, name): void {
    this.users.set(userId, {name, teamId});
    this.associateWithTeam(teamId, userId);
  }
  associateWithTeam(teamId, userId): void {
    if (this.associativeWithTeamList.hasOwnProperty(teamId)) {
      this.associativeWithTeamList[teamId].push(userId);
    } else {
      this.associativeWithTeamList[teamId] = [userId];
    }
  }
  addVacation(userId, vacationId, startDate, endDate, type) {
    this.vacations[vacationId] = {
      startDate, endDate, type, userId
    };
    this.associateWithUser(userId, vacationId);
  }
  associateWithUser(userId, vacationId) {
    if (this.associativeListWithUser.hasOwnProperty(userId)) {
      this.associativeListWithUser[userId].push(vacationId);
    } else {
      this.associativeListWithUser[userId] = [vacationId];
    }
  }
}
