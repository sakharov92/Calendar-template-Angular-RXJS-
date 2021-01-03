import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';

@Injectable()
export class DateService {
    dateStrem: Subject<Date> = new Subject();
    date: Date = lastDayOfMonth(new Date());

    constructor() {
        this.dateStrem.subscribe(date => this.date = date);
    }

    getDate = () => this.date;

    switchMonth(direction: string): void {
        if (direction === 'prev') {
            this.dateStrem.next(new Date(this.date.getFullYear(), this.date.getMonth(), 0));
        } else {
            this.dateStrem.next(new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0));
        }
    }
}
