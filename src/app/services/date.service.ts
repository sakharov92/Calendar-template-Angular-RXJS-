import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
//import isWeekend from 'date-fns/isWeekend';

@Injectable()
export class DateService {
    // date: some Subject (or BehaviourSubject<Date>)
    teamStatisticStream: Subject<number>;
    dateStrem: Subject<Date>;
    date: Date = new Date();
    //teamStatisticList: (string|number)[];

    constructor() {
        this.date = lastDayOfMonth(this.date);
        this.dateStrem = new Subject();
        //this.teamStatisticStream = new Subject();
        //this.teamStatisticList = this.fillStatisticsList(this.date);
        this.dateStrem.subscribe(date => this.date = date);
        /*this.dateStrem.subscribe(date => {
          this.teamStatisticList = this.fillStatisticsList(date);
        });*/
    }
    /*getStatistic(): (string|number)[] {
      return this.teamStatisticList;
    }*/
   /* updateStatistic(index): void {
      if (typeof this.teamStatisticList[index] === 'number') {
        // @ts-ignore
        this.teamStatisticList[index] += 1;
      }
    }*/
    getDate = () => this.date;

    // switchMonth(direction) {}
    switchMonth(direction: number): void {
        if (direction === -1) {
            this.dateStrem.next(new Date(this.date.getFullYear(), this.date.getMonth(), 0));
        } else {
            this.dateStrem.next(new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0));
        }
    }
    /*fillStatisticsList(date) {
      const statisticsList = [];
      for (let i = 1; i <= date.getDate(); i++) {
        const iDate: Date = new Date(date.getFullYear(), date.getMonth(), i);
        if (!!isWeekend(iDate)) {
          statisticsList.push('');
        } else {
          statisticsList.push(0);
        }
      }
      return statisticsList;
    }*/
}
