import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private players: string[];

  constructor() { }

  getContestants() : string[] {
      return this.players;
  }

  addContestant(player: string) {
    this.players.push(player);
  }
}
