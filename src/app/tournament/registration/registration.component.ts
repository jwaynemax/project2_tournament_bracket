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
    this.messages = '';
    this.players.forEach((value) => {
      if (value != '') {
        try {
          this.rosterService.addContestant(value);
        } catch (error) {
          this.messages = error;
        }
      }
    });

    if (this.messages === '' && this.rosterService.getContestants().length !== 2 && this.rosterService.getContestants().length !== 4 && this.rosterService.getContestants().length !== 8) {
      this.messages = "Must have 2, 4, or 8 Players";
    }
    this.outputPlayers = this.rosterService.getContestants();

  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
