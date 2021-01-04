import {DateService} from './date.service';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';

describe('DateService', () => {
    let service: DateService;
    const date: Date = lastDayOfMonth(new Date());
    beforeEach(() => {
        service = new DateService();

    });
    it('subscribe for opening works', () => {
        service.getDate();
        expect(date.getDate).toBe(28 || 29 || 30 || 31);

    });
});
