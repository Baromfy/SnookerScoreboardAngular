import { Component, Input, OnInit, inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { collectionData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection } from 'firebase/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-player-two-scoreboard',
  templateUrl: './player-two-scoreboard.component.html',
  styleUrl: './player-two-scoreboard.component.css'
})
export class PlayerTwoScoreboardComponent implements OnInit {
  users$!: Observable<MatchData[]>;

  constructor(private firestore: AngularFirestore) {

  }

  ngOnInit() {
    // Example: Get data from a Firestore collection
    this.users$ = this.firestore.collection<MatchData>('games').valueChanges();
  }

isPlayer2Active(user: MatchData): boolean {
  return user.player2Active;
}

}

export interface MatchData{
framesToWin: number,
player1Name: string,
player2Name: string,
player1Break: number,
player2Break: number,
player2Frame: number,
player1Frame: number,
player1Point: number,
player2Point: number,
player1Active: boolean,
player2Active: boolean,
}

