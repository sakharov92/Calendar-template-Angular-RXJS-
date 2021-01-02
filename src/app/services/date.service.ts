import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';

@Injectable()
export class DateService {
    dateStrem: Subject<Date>;
    date: Date = new Date();

    constructor() {
        this.date = lastDayOfMonth(this.date);
        this.dateStrem = new Subject();
        this.dateStrem.subscribe(date => this.date = date);
    }

    getDate = () => this.date;
    switchMonth(direction: number): void {
        if (direction === -1) {
            this.dateStrem.next(new Date(this.date.getFullYear(), this.date.getMonth(), 0));
        } else {
            this.dateStrem.next(new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0));
        }
    }
}
