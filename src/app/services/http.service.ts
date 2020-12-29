import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import { departmentTeams } from '../../inputData';
import { InputData } from '../models/inputData';
import { TeamService } from './team.service';
import { UserService } from './user.service';
import { VacationService } from './vacation.service';

@Injectable()
export class HttpService {
    isLoading: boolean;
    isFormSHown: boolean;
    modalStream$: Subject<object> = new Subject();
    dataStream$: Subject<object> = new Subject();
    data: InputData;

    constructor(
      private teamService: TeamService,
      private userService: UserService,
      private vacationService: VacationService
    ) {
        this.isLoading = true;
        this.isFormSHown = false;
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify([departmentTeams]),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    this.data = json[0];
                    this.isLoading = false;
                    this.teamService.setTeams(this.data.teams);
                    this.vacationService.setVacations(this.data.vacations);
                    this.userService.setUsers(this.data.users);
                    this.modalStream$.next({
                      isLoading: this.isLoading,
                      isFormShown: this.isFormSHown
                    });
                    this.dataStream$.next();
                });
        }, 2000);
    }

    showForm = () => {
        this.isFormSHown = true;
        this.isLoading = false;
        this.modalStream$.next(
            {
                isLoading: this.isLoading,
                isFormShown: this.isFormSHown
            }
        );
    }

    hideModalWindow = () => {
        this.isFormSHown = false;
        this.isLoading = false;
        this.modalStream$.next(
            {
                isLoading: this.isLoading,
                isFormShown: this.isFormSHown
            }
        );
    }
}
