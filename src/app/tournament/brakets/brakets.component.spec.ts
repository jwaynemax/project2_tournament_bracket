import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraketsComponent } from './brakets.component';

describe('BraketsComponent', () => {
  let component: BraketsComponent;
  let fixture: ComponentFixture<BraketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
