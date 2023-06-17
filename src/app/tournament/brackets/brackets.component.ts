import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster-service.service';


@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {

  public testers: string[];
  constructor(private rosterService: RosterService) {
    this.testers = rosterService.getContestants();
    console.log(this.testers);

   }

  ngOnInit(): void {}


}
