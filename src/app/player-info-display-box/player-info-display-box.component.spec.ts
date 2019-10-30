import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoDisplayBoxComponent } from './player-info-display-box.component';

describe('PlayerInfoDisplayBoxComponent', () => {
  let component: PlayerInfoDisplayBoxComponent;
  let fixture: ComponentFixture<PlayerInfoDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
