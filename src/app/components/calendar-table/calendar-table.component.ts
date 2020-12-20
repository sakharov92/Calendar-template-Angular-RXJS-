import {Component, OnInit} from '@angular/core';
import {DateService} from '../../services/date.service';
import {Day} from '../../models/day';
import isWeekend from 'date-fns/isWeekend';
import {format} from 'date-fns';

@Component({
    selector: 'app-calendar-table',
    templateUrl: './calendar-table.component.html',
    styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {

    // private teams: { [key in UserRealm]?: Team } = {};

    currentMonthAsDate: Date;
    currentMonthObj: Day[];

    constructor(private dateService: DateService) {
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
