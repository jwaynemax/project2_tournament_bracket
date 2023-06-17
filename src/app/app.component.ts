import { Component } from '@angular/core';
import { RosterService } from './services/roster-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';

  players: string[] = [];

  constructor(private rosterService: RosterService) {}

  addContestant(player: string) {
    this.rosterService.addContestant(player);
    this.players = this.rosterService.getContestants();
  }
}
