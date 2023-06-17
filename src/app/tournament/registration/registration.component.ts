import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster-service.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[] = ['', '', '', '', '', '', '', ''];
  public messages: string;
  public outputPlayers: string[];
  constructor(private rosterService: RosterService) { }

  ngOnInit(): void { }

  registerContestants() {
    this.players.forEach((value) => {
      if (value != '') {
        try {
          this.rosterService.addContestant(value);
        } catch (error) {
          this.messages = error;
        }
      }
    });

    console.log(this.rosterService.getContestants().length);

    if (this.rosterService.getContestants().length !== 2 && this.rosterService.getContestants().length !== 4 && this.rosterService.getContestants().length !== 8) {
      this.messages = "Register either 2, 4, or 8 players";
    }
    this.outputPlayers = this.rosterService.getContestants();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
