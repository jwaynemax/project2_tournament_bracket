import { Component, OnInit } from '@angular/core';
import { RosterService } from './services/roster-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[];
  public messages: string;
  constructor() {
    this.players = ['','','john','','','','',''];
  }

  ngOnInit(): void {
  }

  registerContestants() {
    this.players.forEach(function (value) {
      if (value == '') {
        console.log('empty');
      } else {
          console.log(value);
      }
    });
  }

}
