import {Component, OnInit, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import {DateService} from '../../services/date.service';
import {Day} from '../../models/day';
import isWeekend from 'date-fns/isWeekend';
import {format} from 'date-fns';
import {Team} from '../../models/team';
import {TeamInput} from '../../models/input-data';
//import {teams} from '../../../departmentTeams';
import { v1 as uuidv1 } from 'uuid';
import { TeamService } from '../../services/team.service';
import { DataService } from '../../services/data.service';

/*import { UserService } from '../../services/user.service';
import { VacationService } from '../../services/vacation.service';*/

@Component({
    selector: 'app-calendar-table',
    templateUrl: './calendar-table.component.html',
    styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {

    // private teams: { [key in UserRealm]?: Team } = {};
    //teams: TeamInput[] = teams;
    currentMonthAsDate: Date;
    currentMonthObj: Day[];
    teamsMap: Map<string, Team>;

    constructor(
      private dateService: DateService,
      private dataService: DataService
      //public teamService: TeamService,
      /*private userService: UserService,
      private vacationService: VacationService*/) {
        //this.teamsMap = dataService.getTeams();
        this.currentMonthAsDate = this.dateService.getDate();
        this.currentMonthObj = this.fillMonthObj(dateService.getDate());
        this.dateService.dateStrem.subscribe(date => {
            this.currentMonthAsDate = date;
            this.currentMonthObj = this.fillMonthObj(date);
        });
    }

    fillMonthObj(date: Date): Day[] {
        const newDate: Date = new Date(date);
        const currentMonthObj: Day[] = [];
        const daysInMonth = newDate.getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const iDate: Date = new Date(newDate.getFullYear(), newDate.getMonth(), i);
            const day: Day = {
                date: iDate,
                isDayOff: isWeekend(iDate),
                dayName: format(iDate, 'iiiiii')
            };
            currentMonthObj.push(day);
        }
        return currentMonthObj;
    }

    ngOnInit() {
      //debugger
      this.teamsMap = this.dataService.teams;
        /*for (let team of this.teams) {
          const newTeamId = uuidv1();
          const members = team.members;
          this.teamService.addTeam(newTeamId, team.name, team.percentageOfAbsent);
          for(let member of members) {
            const newUserId = uuidv1();
            this.userService.addUser(newTeamId, newUserId, member.name);
            for (let vacation of member.vacations) {
              const newVacationId = uuidv1();
              this.vacationService.addVacation(newUserId, newVacationId, vacation.startDate, vacation.endDate, vacation.type);
            }
          }
        }
        this.teamsMap = this.teamService.getTeams();*/
        //debugger;
        // you need to get users
        // then construct your team by getting users, such as
        /*
        * this.teams[user.realm] = {
              realm: user.realm,
              participants: []
            };
        * */
        // and then add users to teams, such as
        /*
        * if (user.realm in this.teams) {
            this.teams[user.realm].participants.push(user);
          }
        * */
        // for now you should be have a teams
    }

    // get teamsEntity(): Team[] {}

    // monthDaysEntity(): Day[] {}

    // generateMonth(date: Date): Month {} // should to get month

    // you can create the structure yourself too

}
