import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
    ready = false;

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
                this.ready = !this.ready;
            },
            2500
        );
    }
}
