import { Component, OnInit, Injector } from '@angular/core';
import { RosterService } from '../../services/roster-service.service';


@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {

  public players: string[];
  constructor(private rosterService: RosterService) {
    this.players = rosterService.getContestants();
   }

  ngOnInit(): void {}


}
