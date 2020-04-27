import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterScreenComponent } from './character-screen.component';

describe('CharacterScreenComponent', () => {
  let component: CharacterScreenComponent;
  let fixture: ComponentFixture<CharacterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
