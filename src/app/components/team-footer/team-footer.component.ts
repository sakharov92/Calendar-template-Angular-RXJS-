import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service';
import { StatisticService } from '../../services/statistic.service';
import isWeekend from 'date-fns/isWeekend';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.teamsFooter',
  templateUrl: './team-footer.component.html',
  styleUrls: ['./team-footer.component.css']
})
export class TeamFooterComponent implements OnInit {
  lastDayOfMonth: Date;
  statisticsList: (string|number)[];
  constructor(private dateService: DateService,
              private statisticService: StatisticService) { }
  ngOnInit() {
    this.lastDayOfMonth = this.dateService.getDate();
    this.statisticsList = this.statisticService.getStatistic();
    //debugger
    //this.statisticsList = this.fillStatisticsList(this.lastDayOfMonth);
    this.dateService.dateStrem.subscribe(date => {
      this.statisticsList = this.statisticService.getStatistic();
    });
    /*this.dateService.teamStatisticStream.subscribe(index => {
      const newStat: any = this.statisticsList.slice();
      newStat[index] += 1;
      this.statisticsList = newStat;
    });*/
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
