import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversaryBattleDisplayComponent } from './adversary-battle-display.component';

describe('AdversaryBattleDisplayComponent', () => {
  let component: AdversaryBattleDisplayComponent;
  let fixture: ComponentFixture<AdversaryBattleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdversaryBattleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdversaryBattleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
