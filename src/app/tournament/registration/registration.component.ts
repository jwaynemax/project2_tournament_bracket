import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster-service.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[] = ['','','','','','','',''];
  public messages: string;
  public nameControl = new FormControl();
  constructor(private rosterService: RosterService) {}

  ngOnInit(): void {}

  registerContestants() {
    this.players.forEach((value) => {
      if (value == '') {
        console.log('empty');
      } else {
        console.log(value);
        this.rosterService.addContestant(value);
      }
    });
  }

  trackByFn(index: any, item: any) {
   return index;
}

}
