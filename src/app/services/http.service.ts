import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {teams} from '../../departmentTeams';
import {Team} from '../models/team';


@Injectable()
export class HttpService {
    isLoading: boolean;
    isFormSHown: boolean;
    dataStream$: Subject<object> = new Subject();
    data: Team[];

    constructor() {
        this.isLoading = true;
        this.isFormSHown = false;
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify([teams]),
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
    };

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
    };

}
