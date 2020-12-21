import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

    isLoading = true;
    isFormShown = false;
    currentData;

    constructor(private httpService: HttpService) {
        this.httpService.dataStream$.subscribe(data => {
            this.currentData = data;
            this.isLoading = this.currentData.isLoading;
            this.isFormShown = this.currentData.isFormShown;
        });
    }

    hideModalWindow(event) {
        if (!this.isLoading) {
            event.preventDefault();
            this.httpService.hideModalWindow();
        }
    }

    ngOnInit() {
    }

}
