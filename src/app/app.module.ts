import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DateService} from './services/date.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { CalendarTableComponent } from './components/calendar-table/calendar-table.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { TableBodyComponent } from './components/table-body/table-body.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    CalendarTableComponent,
    MonthSwitcherComponent,
    TableBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }