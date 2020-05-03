import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBattleDisplayComponent } from './character-battle-display.component';

describe('CharacterBattleDisplayComponent', () => {
  let component: CharacterBattleDisplayComponent;
  let fixture: ComponentFixture<CharacterBattleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterBattleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBattleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
