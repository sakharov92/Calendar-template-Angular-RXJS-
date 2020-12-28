import {Component, OnInit} from '@angular/core';
import {DateService} from '../../services/date.service';
import {HttpService} from '../../services/http.service';
import {Day} from '../../models/day';
import {RowTeam} from '../../models/team';
import isWeekend from 'date-fns/isWeekend';
import {format} from 'date-fns';
import { TeamService } from '../../services/team.service';

@Component({
    selector: 'app-calendar-table',
    templateUrl: './calendar-table.component.html',
    styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {

    teams;
    teamsList: RowTeam[];
    currentMonthAsDate: Date;
    currentMonthObj: Day[];
    currentData;

    constructor(private dateService: DateService,
                private httpService: HttpService,
                private teamService: TeamService) {
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

    showForm() {
        this.httpService.showForm();
    }

    ngOnInit() {
      this.teamsList = this.teamService.getTeams();
      this.currentMonthAsDate = this.dateService.getDate();
      this.currentMonthObj = this.fillMonthObj(this.dateService.getDate());
      this.dateService.dateStrem.subscribe(date => {
        this.currentMonthAsDate = date;
        this.currentMonthObj = this.fillMonthObj(date);
      });
      this.httpService.dataStream$.subscribe(data => {
        this.currentData = data;
        this.teams = this.currentData.data;
        console.log(this.teams);
      });
    }


}
