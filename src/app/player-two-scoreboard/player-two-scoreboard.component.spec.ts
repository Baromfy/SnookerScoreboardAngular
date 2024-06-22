import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTwoScoreboardComponent } from './player-two-scoreboard.component';

describe('PlayerTwoScoreboardComponent', () => {
  let component: PlayerTwoScoreboardComponent;
  let fixture: ComponentFixture<PlayerTwoScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerTwoScoreboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerTwoScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
