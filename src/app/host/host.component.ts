import { Component } from '@angular/core';
import { interval, Subscription } from "rxjs";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent {

  readonly possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U']
  readonly totalSeconds = 120;

  private subscription: Subscription | undefined;

  letter = '';
  seconds = this.totalSeconds;

  playStop(): void {
    if (this.letter && this.seconds > 0) {
      this.letter = '';
      this.seconds = this.totalSeconds;
      this.subscription?.unsubscribe();
    } else {
      this.letter = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)]
      this.seconds = this.totalSeconds - 1;
      this.subscription = interval(100)
        .subscribe(() => {
          this.seconds -= 1;
          if (this.seconds <= 0) {
            this.subscription?.unsubscribe();
          }
        });
    }
  }
}
