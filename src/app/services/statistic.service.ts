import {Injectable} from '@angular/core';
import isWeekend from 'date-fns/isWeekend';
import { DateService } from './date.service';

@Injectable()
export class StatisticService {
  teamStatisticList: (string|number)[];
  date: Date;

  constructor(private dateService: DateService) {
    this.date = dateService.getDate();
    this.teamStatisticList = this.fillStatisticsList(this.date);
    this.dateService.dateStrem.subscribe(date => {
      this.teamStatisticList = this.fillStatisticsList(date);
    });
  }
  getStatistic(): (string|number)[] {
    return this.teamStatisticList;
  }
  updateStatistic(index): void {
    if (typeof this.teamStatisticList[index] === 'number') {
      // @ts-ignore
      this.teamStatisticList[index] += 1;
    }
  }
  /*setToZeroStatistic(date) {
    this.teamStatisticList = this.fillStatisticsList(date);
  }*/
  fillStatisticsList(date): (string|number)[]  {
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
  }
}
