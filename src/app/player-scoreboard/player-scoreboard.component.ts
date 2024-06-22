import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import 'animate.css';

@Component({
  selector: 'player-scoreboard',
  templateUrl: './player-scoreboard.component.html',
  styleUrls: ['./player-scoreboard.component.css'],
})
export class PlayerScoreboardComponent implements OnInit {
  users$!: Observable<MatchData[]>;
  previousPoints!: number;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.users$ = this.firestore.collection<MatchData>('games').valueChanges();
  }


  isPlayer1Active(user: MatchData): boolean {
    return user.player1Active;
  }

}

export interface MatchData {
  lastIsRed: boolean;
  framesToWin: number;
  player1Name: string;
  player2Name: string;
  player1Break: number;
  player2Break: number;
  player2Frame: number;
  player1Frame: number;
  player1Point: number;
  player2Point: number;
  player1Active: boolean;
  player2Active: boolean;
  numOfRed: number;
  numOfYellow: number;
  numOfGreen: number;
  numOfBrown: number;
  numOfBlue: number;
  numOfPink: number;
  numOfBlack: number;
}
