import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';


import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 players', () => {
    component.players = ['John','Jacob']
    component.registerContestants();
    expect(component.outputPlayers.length === 2).toBeTruthy();
  });

  it('should not allow duplicate players', () => {
    component.players = ['John','John']
    component.registerContestants();
    expect(component.messages === "Error: Player already exists");
  });

  it('should not register an empty player', () => {
    component.players = ['']
    component.registerContestants();
    expect(component.messages === "Error: Player cannot be empty");
  });

  it('should only allow brackets with 2, 4, or 8', () => {
    component.players = ['John', 'Doe', 'Randy']
    component.registerContestants();
    expect(component.messages === "Must have 2, 4, or 8 Players");
  });
});
