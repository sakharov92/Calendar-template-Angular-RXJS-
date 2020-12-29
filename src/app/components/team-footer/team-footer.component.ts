import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service';
import { StatisticService } from '../../services/statistic.service';
import isWeekend from 'date-fns/isWeekend';
import {HttpService} from '../../services/http.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.teamsFooter',
  templateUrl: './team-footer.component.html',
  styleUrls: ['./team-footer.component.css']
})
export class TeamFooterComponent implements OnInit {
  statisticsList: (string|number)[];
  constructor(private dateService: DateService,
              private statisticService: StatisticService) { }
  ngOnInit() {
    this.statisticsList = this.statisticService.getStatistic();
    this.dateService.dateStrem.subscribe(date => {
      this.statisticsList = this.statisticService.getStatistic();
    });
  }

}
