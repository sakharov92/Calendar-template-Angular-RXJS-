import {Injectable} from '@angular/core';
import { RowTeam } from '../models/team';
import { HttpService } from './http.service';


@Injectable()
export class TeamService {
  teams: RowTeam[];
  currentData;
  /*private teams: RowTeam[] = [
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
  ];*/
  /*constructor(private httpService: HttpService) {
      //this.teams = this.httpService.getDataByName('teams');
    //this.teams = this.httpService.data.teams;
  }*/
  /*constructor(private httpService: HttpService) {
    this.httpService.dataStream$.subscribe(data => {
      this.currentData = data;
      this.teams = this.currentData.data.teams;
    });
  }*/
  /*constructor(private httpService: HttpService) {
    this.httpService.dataStream$.subscribe(data => {
      //this.currentData = data;
      this.teams = this.httpService.getDataByName('teams');
    });
  }*/
  setTeams(teams): void {
    this.teams = teams;
  }
  getTeams(): RowTeam[] {
    return this.teams;
  }
  getTeamById(teamId): RowTeam {
    return this.teams.find((element) => {
      return teamId === element.id;
    });
  }

}
