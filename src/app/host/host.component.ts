import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from "rxjs";
import { getRandom } from "../utils";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnDestroy {

  readonly possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U'];
  readonly totalSeconds = 120;

  private subscription: Subscription | undefined;

  letter = '';
  seconds = this.totalSeconds;

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  playStop(): void {
    if (this.letter && this.seconds > 0) {
      this.letter = '';
      this.seconds = this.totalSeconds;
      this.subscription?.unsubscribe();
    } else {
      this.letter = getRandom(this.possibleLetters);
      this.playAudioFile(`${this.letter.toLowerCase()}.mp3`);
      this.seconds = this.totalSeconds - 1;
      this.subscription = interval(1000)
        .subscribe(() => {
          this.seconds -= 1;
          switch (this.seconds) {
            case 60:
              this.playAudioFile('one-minute-remaining.mp3');
              break;
            case 10:
            case 3:
            case 2:
            case 1:
              this.playAudioFile(`${this.seconds}.mp3`);
              break;
            case 0:
              this.playAudioFile('stop.mp3');
              break;
          }
          if (this.seconds <= 0) {
            this.subscription?.unsubscribe();
          }
        });
    }
  }

  playAudioFile(filename: string): void {
    let audio = new Audio();
    audio.src = `assets/sounds/${filename}`;
    audio.load();
    audio.play();
  }
}
