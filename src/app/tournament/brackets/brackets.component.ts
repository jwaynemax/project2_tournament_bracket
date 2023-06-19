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
  public round = 1;
  constructor(private rosterService: RosterService) {
    if (this.round == 1) {
      this.players = rosterService.getContestants();
    }
   }

  ngOnInit(): void {}

  getWinner(): string[] {
    this.players = [];
    if (this.groupOne !== '' && this.groupOne !== undefined) {
      this.players.push(this.groupOne);
    }

    if (this.groupTwo !== '' && this.groupTwo !== undefined) {
      this.players.push(this.groupTwo);
    }

    if (this.groupThree !== '' && this.groupThree !== undefined) {
      this.players.push(this.groupThree);
    }

    if (this.groupFour !== '' && this.groupFour !== undefined) {
      this.players.push(this.groupFour);
    }

    this.groupOne = '';
    this.groupTwo = '';
    this.groupThree = '';
    this.groupFour = '';

    if(this.players.length !== 1) {
      this.round++;
    }
    return this.players;
  }
}
