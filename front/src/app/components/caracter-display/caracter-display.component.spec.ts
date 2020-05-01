import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterDisplayComponent } from './caracter-display.component';

describe('CaracterDisplayComponent', () => {
  let component: CaracterDisplayComponent;
  let fixture: ComponentFixture<CaracterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
