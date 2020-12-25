import {Vacation, AvailableDates} from '../models/vacation';
import {Injectable} from '@angular/core';

@Injectable()
export class VacationService {
  private vacations: Vacation[] = [
    {
      id: 1,
      startDate: '25.11.2020',
      endDate: '15.12.2020',
      userId: 1,
      isPaid: false
    },
    {
      id: 2,
      startDate: '31.12.2020',
      endDate: '07.01.2021',
      userId: 1,
      isPaid: true
    },
    {
      id: 3,
      startDate: '30.11.2020',
      endDate: '04.12.2020',
      userId: 2,
      isPaid: false
    },
    {
      id: 4,
      startDate: '20.03.2020',
      endDate: '22.03.2020',
      userId: 2,
      isPaid: false
    },


    {
      id: 5,
      startDate: '10.12.2020',
      endDate: '15.12.2020',
      userId: 3,
      isPaid: true
    },
    {
      id: 6,
      startDate: '05.02.2021',
      endDate: '15.02.2021',
      userId: 3,
      isPaid: true
    },
    {
      id: 7,
      startDate: '01.02.2020',
      endDate: '10.02.2020',
      userId: 4,
      isPaid: true
    },
    {
      id: 8,
      startDate: '20.02.2021',
      endDate: '22.02.2021',
      userId: 4,
      isPaid: false
    },


    {
      id: 9,
      startDate: '02.12.2020',
      endDate: '03.12.2020',
      userId: 5,
      isPaid: true
    },
    {
      id: 10,
      startDate: '05.02.2021',
      endDate: '15.02.2021',
      userId: 5,
      isPaid: true
    },
    {
      id: 11,
      startDate: '08.12.2020',
      endDate: '21.12.2020',
      userId: 6,
      isPaid: false
    },
    {
      id: 12,
      startDate: '20.02.2021',
      endDate: '22.02.2021',
      userId: 6,
      isPaid: false
    },

  ];
  formatInputDate(stringDate: string): Date {
    return new Date(
      parseInt(stringDate.slice(6, 10), 10),
      parseInt(stringDate.slice(3, 5), 10) - 1,
      parseInt(stringDate.slice(0, 2), 10)
    );
  }
  generateVacationSetsByUserId(userId: number, date: Date): AvailableDates[] {
    const userVacations = this.getVacationsByUserId(userId);
    const filteredVacations: AvailableDates[] = [];
    for (const vacationItem of userVacations) {
      const startDate = this.formatInputDate(vacationItem.startDate);
      const endDate = this.formatInputDate(vacationItem.endDate);
      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth());
      const lastDayOfMonth = date;
      const availableDates: AvailableDates = {
        availableDatesList: new Set(),
        isPaid: vacationItem.isPaid,
      };
      if (!(endDate < firstDayOfMonth) && !(startDate > lastDayOfMonth)) {
        let currentVacationDate = new Date(startDate.getTime());
        for (
          let index = currentVacationDate.getDate();
          currentVacationDate <= lastDayOfMonth && currentVacationDate <= endDate;
          ++index
        ) {
          currentVacationDate = new Date(startDate.getFullYear(), startDate.getMonth(), index);
          if (firstDayOfMonth <= currentVacationDate && lastDayOfMonth >= currentVacationDate) {
            availableDates.availableDatesList.add(currentVacationDate.toISOString());
          }
          currentVacationDate = new Date(startDate.getFullYear(), startDate.getMonth(), index + 1);
        }
      }
      filteredVacations.push(availableDates);
    }
    return filteredVacations;
  }
  getVacationsByUserId(userId: number): Vacation[] {
    return this.vacations.filter((element) => {
      return userId === element.userId;
    });
  }
}
