import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamUserComponent } from './team-user.component';

describe('TeamUserComponent', () => {
  let component: TeamUserComponent;
  let fixture: ComponentFixture<TeamUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
