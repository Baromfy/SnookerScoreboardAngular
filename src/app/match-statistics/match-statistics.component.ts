import { Component, OnInit } from '@angular/core';
import { MatchData } from '../player-scoreboard/player-scoreboard.component';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'match-statistics',
  templateUrl: './match-statistics.component.html',
  styleUrls: ['./match-statistics.component.css']
})
export class MatchStatisticsComponent implements OnInit {
  users$!: Observable<MatchData[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.users$ = this.firestore.collection<MatchData>('games').valueChanges();
  }
}