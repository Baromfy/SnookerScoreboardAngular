import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() totalTime: number = 10;
  timeLeft: number = this.totalTime;
  interval: any;

  constructor() { }

  ngOnInit(): void { }

  startTimer() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timeLeft = this.totalTime;
  }

  get percentageLeft(): number {
    return (this.timeLeft / this.totalTime) * 100;
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
