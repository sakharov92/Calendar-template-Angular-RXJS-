import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFooterComponent } from './team-footer.component';

describe('TeamFooterComponent', () => {
  let component: TeamFooterComponent;
  let fixture: ComponentFixture<TeamFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
