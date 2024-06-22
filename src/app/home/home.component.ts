import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IpServiceService } from '../ip-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  player1Name: string = '';
  player2Name: string = '';
  framesToWin: number = 1;
  ipAddress: string = '';
  mode: string = '';

  constructor(private router: Router, private firestore: AngularFirestore, private ipService: IpServiceService) { }

  selectMode(mode: string) {
    console.log(`${mode} mód kiválasztva`);
    this.router.navigate([`/${mode}`]);
  }

  ngOnInit(): void {
    this.ipService.getIpAddress().subscribe((data: { ip: string; }) => {
      this.ipAddress = data.ip;
    });
  }

  startGame(gameForm: NgForm) {
    if (gameForm.invalid) {
      return;
    }

    const gameData = {
      player1Name: this.player1Name,
      player2Name: this.player2Name,
      framesToWin: this.framesToWin,
      player1Point: 0,
      player2Point: 0,
      player1Break: 0,
      player2Break: 0,
      player1Frame: 0,
      player2Frame: 0,
      player1Active: true,
      player2Active: false,
      lastIsRed: false,
      numOfRed: 15,
      numOfYellow: 1,
      numOfGreen: 1,
      numOfBrown: 1,
      numOfBlue: 1,
      numOfPink: 1,
      numOfBlack: 1
    };

    const docRef = this.firestore.collection('games').doc("1");

    docRef.get().subscribe(docSnapshot => {
      if (docSnapshot.exists) {
        docRef.delete()
          .then(() => {
            console.log('Létező dokumentum törölve.');
            this.createGameDocument(docRef, gameData);
          })
          .catch((error: any) => {
            console.error('Hiba a dokumentum törlésekor:', error);
          });
      } else {
        this.createGameDocument(docRef, gameData);
      }
    });
  }

  private createGameDocument(docRef: any, gameData: any) {
    docRef.set(gameData)
      .then(() => {
        console.log('Játék adatai mentve a Firestore-ba!');
        this.selectMode(this.mode);
      })
      .catch((error: any) => {
        console.error('Hiba a játék adatainak mentésekor:', error);
      });
  }
}
