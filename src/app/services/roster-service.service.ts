import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  public contestants: string[] = [];
  constructor() {
    this.contestants = [];
  }

  getContestants(): string[] {
      return this.contestants;
  }

  addContestant(player: string) {

    if (player == null) {
      throw new Error("Player cannot be null");
    }

    if (player == "") {
      throw new Error("Player cannot be empty");
    }

    if (this.getContestants().includes(player)) {
      throw new Error("Player already exists");
    }

    this.contestants.push(player);
  }
}
