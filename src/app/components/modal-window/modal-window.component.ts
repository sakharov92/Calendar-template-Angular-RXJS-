import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ModalWindowAndFormService} from '../../services/modalWindowAndForm.service';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

    isLoading = true;
    isFormShown = false;
    currentData;
    daysOff = '';
    dateFromString;
    dateToString;

    constructor(private httpService: HttpService, private modalWindowAndFormService: ModalWindowAndFormService) {
    }

    ngOnInit() {
        this.modalWindowAndFormService.modalStream$.subscribe(data => {
            this.currentData = data;
            this.isLoading = this.currentData.isLoading;
            this.isFormShown = this.currentData.isFormShown;
        });
    }

    hideModalWindow(event) {
        if (!this.isLoading) {
            event.preventDefault();
            this.modalWindowAndFormService.hideModalWindow();
        }
    }

    dateInputHandler(event) {
        if (event.target.classList.contains('form__input-from')) {
            this.dateFromString = event.target.value;
        } else {
            this.dateToString = event.target.value;
        }
        if (this.dateFromString && this.dateToString) {
            let difference: number = (Number(new Date(this.dateToString)) - Number(new Date(this.dateFromString))) / (1000 * 3600 * 24);
            if (difference < 0) {
                [this.dateFromString, this.dateToString] = [this.dateToString, this.dateFromString];
                difference = -difference;
                this.daysOff = difference + ' days';

            } else {
                this.daysOff = difference + ' days';
            }
        }

    }

}
