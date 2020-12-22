import {Injectable} from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: {id: Team} | {} = {};

  addTeam(id, name, percentageOfAbsent) {
    this.teams[id] = {
      name, percentageOfAbsent
    };
  }
}
