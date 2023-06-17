import { Component, OnInit} from '@angular/core';
import { RosterService } from './services/roster-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project2';

  public contestants: string[];

  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    this.contestants = this.rosterService.getContestants();
  }

  addContestant(player: string) {
    this.rosterService.addContestant(player);
  }
}
