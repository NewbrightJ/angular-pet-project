import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchBoxComponent } from './player-search-box.component';

describe('PlayerSearchBoxComponent', () => {
  let component: PlayerSearchBoxComponent;
  let fixture: ComponentFixture<PlayerSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
