import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotoutComponent } from './shotout.component';

describe('ShotoutComponent', () => {
  let component: ShotoutComponent;
  let fixture: ComponentFixture<ShotoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShotoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShotoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
