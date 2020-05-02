import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsHandlerComponent } from './spells-handler.component';

describe('SpellsHandlerComponent', () => {
  let component: SpellsHandlerComponent;
  let fixture: ComponentFixture<SpellsHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
