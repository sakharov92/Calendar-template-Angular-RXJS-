import {Vacation} from '../models/vacation';
import {Injectable} from '@angular/core';

@Injectable()

export class VacationService {
  vacations: {id: Vacation} | {} = {};
  private associativeListWithUser: {userId: string[]} | {} = {};

  addVacation(userId, vacationId, startDate, endDate, type) {
    this.vacations[vacationId] = {
      startDate, endDate, type, userId
    };
    this.associateWithUser(userId, vacationId);
  }
  associateWithUser(userId, vacationId) {
    if (this.associativeListWithUser.hasOwnProperty(userId)) {
      this.associativeListWithUser[userId].push(vacationId);
    } else {
      this.associativeListWithUser[userId] = [vacationId];
    }
  }
}
/*export class VacationService {
    private vacations: Vacation[] = [

    // getVacations(): Observable<Vacation[]> {}

    // getVacationById(): Observable<Vacation>
}*/
