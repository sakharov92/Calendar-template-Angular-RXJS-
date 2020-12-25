import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'calendar';

  ngOnInit() {
      /*for (let team of this.teams) {
        const newTeamId = uuidv1();
        const members = team.members;
        this.teamService.addTeam(newTeamId, team.name, team.percentageOfAbsent);
        for(let member of members) {
          const newUserId = uuidv1();
          this.userService.addUser(newTeamId, newUserId, member.name);
          for (let vacation of member.vacations) {
            const newVacationId = uuidv1();
            this.vacationService.addVacation(newUserId, newVacationId, vacation.startDate, vacation.endDate, vacation.type);
          }
        }
      }*/
  }
}
