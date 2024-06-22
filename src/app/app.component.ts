import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardsVisible: boolean = false;

  selectMode(mode: string) {
    // Mód választás logika
  }

  showCards() {
    this.cardsVisible = true;
  }
}