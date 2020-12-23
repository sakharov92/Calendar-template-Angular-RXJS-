import {Component, Input, OnInit, AfterContentInit} from '@angular/core';


import {DateService} from '../../services/date.service';
//import { TeamService } from '../../services/team.service';
import { DataService } from '../../services/data.service';
import {Team} from '../../models/team';

@Component({
    selector: 'app-table-body',
    templateUrl: './table-body.component.html',
    styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {
    @Input() currentMonthObj;
    @Input() teamId: string;
    team: Team;
    date: Date;

    constructor(private dateService: DateService, private dataService: DataService) {
        //debugger
        this.date = this.dateService.getDate();
        //this.initTeam();
        /*this.dateService.dateStrem.subscribe(date => {
            this.date = date;
        });*/
    }
    initTeam() {

    }
    ngOnInit() {
      //debugger
      /*setTimeout(() => {
        this.team = this.teamService.getTeamById(this.teamId);
      });*/
        this.team = this.dataService.getTeamById(this.teamId);
        //this.name = Object.keys(this.userRealm).find(key => this.userRealm[key] === this.team.realm);
    }
}
