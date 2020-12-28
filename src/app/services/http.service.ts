import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
/*import {teams} from '../../departmentTeams';
import {Team} from '../models/team';*/
import { departmentTeams } from '../../inputData';
import { InputData } from '../models/inputData';
import { RowTeam } from '../models/team';
import { RowUser } from '../models/user';
import { Vacation } from '../models/vacation';

@Injectable()
export class HttpService {
    isLoading: boolean;
    isFormSHown: boolean;
    dataStream$: Subject<object> = new Subject();
    data: InputData;

    constructor() {
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
                    this.dataStream$.next({
                        data: this.data,
                        isLoading: this.isLoading,
                        isFormShown: this.isFormSHown
                    });
                });
        }, 2000);
    }
    getDataByName(dataName: 'teams'): RowTeam[];
    getDataByName(dataName: 'users'): RowUser[];
    getDataByName(dataName: 'vacations'): Vacation[];
    getDataByName(dataName: string): any {
        return this.data[dataName];
    }

    showForm = () => {
        this.isFormSHown = true;
        this.isLoading = false;
        this.dataStream$.next(
            {
                data: this.data,
                isLoading: this.isLoading,
                isFormShown: this.isFormSHown
            }
        );
    }

    hideModalWindow = () => {
        this.isFormSHown = false;
        this.isLoading = false;
        this.dataStream$.next(
            {
                data: this.data,
                isLoading: this.isLoading,
                isFormShown: this.isFormSHown
            }
        );
    }

}
