import {Injectable} from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Map<string, Team>  = new Map();
  addTeam(id, name, percentageOfAbsent) {
    this.teams.set(id, {name, percentageOfAbsent});
  }
  getTeams(): Map<string, Team> {
    return this.teams;
  }
  getTeamById(teamId: string): Team {
    return this.teams.get(teamId);
  }
}
