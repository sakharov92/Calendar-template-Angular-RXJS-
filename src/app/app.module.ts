import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DateService} from './services/date.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseLayoutComponent} from './components/base-layout/base-layout.component';
import {CalendarTableComponent} from './components/calendar-table/calendar-table.component';
import {MonthSwitcherComponent} from './components/month-switcher/month-switcher.component';
import {TableBodyComponent} from './components/table-body/table-body.component';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import {HttpService} from './services/http.service';

import {StatisticService} from './services/statistic.service';
import {TeamFooterComponent} from './components/team-footer/team-footer.component';
import {VacationService} from './services/vacation.service';
import {TeamUserComponent} from './components/team-user/team-user.component';
import {UserService} from './services/user.service';
import {TeamService} from './services/team.service';
import {ModalWindowAndFormService} from './services/modalWindowAndForm.service';

@NgModule({
    declarations: [
        AppComponent,
        BaseLayoutComponent,
        CalendarTableComponent,
        MonthSwitcherComponent,
        TableBodyComponent,
        ModalWindowComponent,
        TeamFooterComponent,
        TeamUserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        DateService,
        HttpService,
        StatisticService,
        VacationService,
        UserService,
        TeamService,
        ModalWindowAndFormService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
