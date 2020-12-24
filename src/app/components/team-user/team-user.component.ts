import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import isWeekend from 'date-fns/isWeekend';
import { AvailableDates } from '../../models/vacation';
import { UserService } from '../../services/user.service';
import { VacationService } from '../../services/vacation.service';
import { DateService } from '../../services/date.service';
import { CellInfo } from '../../models/day';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[team-user]',
  templateUrl: './team-user.component.html',
  styleUrls: ['./team-user.component.css']
})
export class TeamUserComponent implements OnInit {
  @Input() userId: number;
  lastDayOfMonth: Date;
  user: User;
  dayCells: CellInfo[] = [];
  constructor(
    private userService: UserService,
    private vacationService: VacationService,
    private dateService: DateService) { }

  ngOnInit() {
    this.lastDayOfMonth =  this.dateService.getDate();
    this.user = this.userService.getUserById(this.userId);
    this.dayCells = this.fillDayCells(this.userId, this.lastDayOfMonth);
    this.dateService.dateStrem.subscribe(date => {
      this.lastDayOfMonth = date;
      this.dayCells = this.fillDayCells(this.userId , this.lastDayOfMonth);
    });
   /* for (let i = 1; i <= this.lastDayOfMonth.getDate(); i++) {
      const iDate: Date = new Date(this.lastDayOfMonth.getFullYear(), this.lastDayOfMonth.getMonth(), i);
      this.dayCells.push(this.getCellInfo(iDate, this.vacationsFiltered));
    }
    this.showVacationInfoText(this.dayCells);*/
  }
  fillDayCells(userId, lastDayOfMonth): CellInfo[] {
    const dayCells: CellInfo[] = [];
    const vacationsFiltered: AvailableDates[] = this.vacationService.generateVacationSetsByUserId(userId, lastDayOfMonth);
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      this.dateService.teamStatisticStream.next(i - 1);
      const iDate: Date = new Date(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth(), i);
      dayCells.push(this.getCellInfo(iDate, vacationsFiltered));
    }
    this.showVacationInfoText(dayCells);
    return dayCells;
  }
  getCellInfo(date: Date, vacationsFiltered: AvailableDates[]): CellInfo {
    const cellDate: string = date.toISOString();
    const cellInfo: CellInfo = {
      isWeekend: isWeekend(date),
      isVacation: false,
      isUiStart: false,
      isUiEnd: false,
      isPaid: false,
      isTypeText: false,
      isLeftL: false,
      isLeftS: false
    };
    for (const vacationItem of vacationsFiltered) {
      const vacationItemEntries = [...vacationItem.availableDatesList];
      const vacationUiStart = vacationItemEntries[0];
      const vacationUiEnd = vacationItemEntries[vacationItemEntries.length - 1];
      if (vacationItem.availableDatesList.has(cellDate)) {
        cellInfo.isVacation = true;
        if (cellDate === vacationUiStart) {
          cellInfo.isUiStart = true;
          //this.component.className += " vacation-cell_ui-start";
        }
        if (cellDate === vacationUiEnd) {
          cellInfo.isUiEnd = true;
          //this.component.className += " vacation-cell_ui-end";
        }
        if (!!vacationItem.isPaid) {
          cellInfo.isPaid = true;
        }
      }
    }
    return cellInfo;
  }
  showVacationInfoText(dayCells) {
    let startUiCellIndex;
    let vacationUILength;
    let shift;
    for (let index = 0; index < dayCells.length; ++index) {
      if (!!dayCells[index].isUiStart) {
        startUiCellIndex = index;
      }
      if (!!dayCells[index].isUiEnd) {
        vacationUILength = index - startUiCellIndex;
        if (vacationUILength % 2 === 0) {
          shift = vacationUILength / 2;
          dayCells[startUiCellIndex + shift].isTypeText = true;
          dayCells[startUiCellIndex + shift].isLeftS = true;
        } else {
          shift = (vacationUILength - 1) / 2;
          dayCells[startUiCellIndex + shift].isTypeText = true;
          dayCells[startUiCellIndex + shift].isLeftL = true;
        }
      }
    }
  }
  calculateClasses(dayCell) {
    return {
      dayCell: true,
      weekend: dayCell.isWeekend,
      'vacation-cell_paid': dayCell.isVacation && dayCell.isPaid,
      'vacation-cell_unpaid': dayCell.isVacation && !dayCell.isPaid,
      'vacation-cell_ui-start': dayCell.isUiStart,
      'vacation-cell_ui-end': dayCell.isUiEnd,
      'vacation-cell_type-text': dayCell.isTypeText,
      'vacation-cell_type-text_left_s': dayCell.isLeftS,
      'vacation-cell_type-text_left_l': dayCell.isLeftL
    };
  }
}
