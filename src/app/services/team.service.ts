import {Injectable} from '@angular/core';
import { RowTeam } from '../models/team';


@Injectable()
export class TeamService {
  private teams: RowTeam[] = [
    {
      name: 'Frontend Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 1
    },
    {
      name: 'Design Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 2
    },
    {
      name: 'Backend Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 3
    },
    {
      name: 'Managers Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 4
    }
  ];
  getTeams(): RowTeam[] {
    return this.teams;
  }
  getTeamById(teamId): RowTeam {
    return this.teams.find((element) => {
      return teamId === element.id;
    });
  }

}
