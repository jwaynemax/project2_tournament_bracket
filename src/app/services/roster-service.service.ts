import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private player: string[];

  constructor() { }
}

getContestants() : string[] {
    return this.player;
}

addContestant(player: string) {
  this.player.push(player);
}
