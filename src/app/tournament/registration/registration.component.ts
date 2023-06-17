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
    let count = 0;
    this.players.forEach((value) => {
        try {
          this.rosterService.addContestant(value);
          if (count == 1 || count == 3 || count == 7) {
            if(value == '') {
              console.log("Bracket must have 2, 4, or 8 players.")
            }
          }
          count++;
        } catch (error) {
          this.messages = error;
        }
    });
    this.outputPlayers = this.rosterService.getContestants();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
