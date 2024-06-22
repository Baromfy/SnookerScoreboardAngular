import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  minutes: number = 0;
  seconds: number = 0;
  private timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  formatTime(): string {
    const min = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    const sec = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    return `${min}:${sec}`;
  }
}
