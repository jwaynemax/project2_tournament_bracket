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
  constructor(private rosterService: RosterService) {
    this.rosterService.contestants = [];
  }

  ngOnInit(): void { }

  registerContestants() {
    this.messages = '';

    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      if (player !== "") {
        try {
          this.rosterService.addContestant(player);
        } catch (error) {
          this.messages = error;
          this.rosterService.contestants = [];
          break;
        }
      }
    }

    if (this.messages === '' && this.rosterService.getContestants().length !== 2 && this.rosterService.getContestants().length !== 4 && this.rosterService.getContestants().length !== 8) {
      this.messages = "Must have 2, 4, or 8 Players";
      this.rosterService.contestants = [];
    }
    this.outputPlayers = this.rosterService.getContestants();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
