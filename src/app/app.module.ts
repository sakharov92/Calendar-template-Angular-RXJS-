import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*import {DateService} from './services/date.service';
import { TeamService } from './services/team.service';
import { VacationService } from './services/vacation.service';
import { DataService } from './services/data.service';*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { CalendarTableComponent } from './components/calendar-table/calendar-table.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import {DateService} from './services/date.service';
import { TeamService } from './services/team.service';
import { UserService } from './services/user.service';
import { TeamUserComponent } from './components/team-user/team-user.component';
import { VacationService } from './services/vacation.service';
import { TeamFooterComponent } from './components/team-footer/team-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    CalendarTableComponent,
    MonthSwitcherComponent,
    TableBodyComponent,
    TeamUserComponent,
    TeamFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DateService,
    TeamService,
    UserService,
    VacationService
    //DateService,
    /*TeamService,
    UserService,
    VacationService,
    //DataService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
