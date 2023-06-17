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
        try {
          this.rosterService.addContestant(value);
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
