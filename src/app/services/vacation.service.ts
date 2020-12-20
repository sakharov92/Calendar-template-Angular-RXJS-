import {Vacation} from '../models/vacation';

export class VacationService {
    private vacations: Vacation[] = [
        {
            id: 1,
            startDate: '25.11.2020',
            endDate: '01.12.2020',
            userId: 1,
            isPaid: 'UnPaid'
        },
        {
            id: 2,
            startDate: '31.12.2020',
            endDate: '05.01.2021',
            userId: 1,
            isPaid: 'Paid'
        },
        {
            id: 3,
            startDate: '30.11.2020',
            endDate: '04.12.2020',
            userId: 2,
            isPaid: 'UnPaid'
        },
        {
            id: 4,
            startDate: '20.03.2020',
            endDate: '22.03.2020',
            userId: 2,
            isPaid: 'UnPaid'
        },


        {
            id: 5,
            startDate: '10.12.2020',
            endDate: '15.12.2020',
            userId: 3,
            isPaid: 'Paid'
        },
        {
            id: 6,
            startDate: '05.02.2021',
            endDate: '15.02.2021',
            userId: 3,
            isPaid: 'Paid'
        },
        {
            id: 7,
            startDate: '01.02.2020',
            endDate: '10.02.2020',
            userId: 4,
            isPaid: 'Paid'
        },
        {
            id: 8,
            startDate: '20.02.2021',
            endDate: '22.02.2021',
            userId: 4,
            isPaid: 'UnPaid'
        },


        {
            id: 9,
            startDate: '02.12.2020',
            endDate: '03.12.2020',
            userId: 5,
            isPaid: 'Paid'
        },
        {
            id: 10,
            startDate: '05.02.2021',
            endDate: '15.02.2021',
            userId: 5,
            isPaid: 'Paid'
        },
        {
            id: 11,
            startDate: '08.12.2020',
            endDate: '21.12.2020',
            userId: 6,
            isPaid: 'UnPaid'
        },
        {
            id: 12,
            startDate: '20.02.2021',
            endDate: '20.02.2021',
            userId: 6,
            isPaid: 'UnPaid'
        },

    ];

    // getVacations(): Observable<Vacation[]> {}

    // getVacationById(): Observable<Vacation>
}
