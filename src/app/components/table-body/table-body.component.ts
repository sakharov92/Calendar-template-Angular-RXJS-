import {Component, Input, OnInit} from '@angular/core';
import {UserRealm} from '../../models/user';


import {DateService} from '../../services/date.service';

@Component({
    selector: 'app-table-body',
    templateUrl: './table-body.component.html',
    styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {
    @Input() currentMonthObj;
    @Input() team;
    userRealm = UserRealm;
    name: string;
    date: Date;

    constructor(private dateService: DateService) {
        this.date = this.dateService.getDate();
        this.dateService.dateStrem.subscribe(date => {
            this.date = date;
        });
    }

    ngOnInit() {
        this.name = Object.keys(this.userRealm).find(key => this.userRealm[key] === this.team.realm);
    }
}
