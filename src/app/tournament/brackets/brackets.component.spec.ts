import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BracketsComponent } from './brackets.component';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify that the list of winners contains 4 people', () => {
    component.groupOne = "John";
    component.groupTwo = "Sally";
    component.groupThree = "Jane";
    component.groupFour = "Harry";
    expect(component.getWinner().length === 4);
  });

  it('should work with only two groups', () => {
    component.groupOne = "John";
    component.groupTwo = "Sally";
    expect(component.getWinner().length === 2);
  });

  it('should be round 1', () => {
    component.groupOne = "John";
    component.getWinner()
    expect(component.round === 1);
  });

  it('should be round 2', () => {
    component.groupOne = "John";
    component.groupOne = "Harry";
    component.getWinner()
    expect(component.round === 2);
  });
});
