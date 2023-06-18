import { Component, OnInit, Injector } from '@angular/core';
import { RosterService } from '../../services/roster-service.service';


@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {

  public players: string[];
  public groupOne: string;
  public groupTwo: string;
  public groupThree: string;
  public groupFour: string;
  public winners: string[];
  constructor(private rosterService: RosterService) {
    this.players = rosterService.getContestants();
    this.winners = [];
   }

  ngOnInit(): void {}

  getWinner(): string[] {
    this.winners.push(this.groupOne, this.groupTwo);
    return this.winners;
  }


}
