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
    this.dateService.dateStrem.subscribe(date => {
      this.statisticsList = this.statisticService.getStatistic();
    });
  }

}
