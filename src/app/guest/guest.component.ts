import { Component } from '@angular/core';
import { getRandom } from "../utils";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {

  readonly letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
  readonly numbers = [1, 2, 3, 4, 5];

  rows: string[][] = [];

  constructor() {
    this.rows = this.letters.map(letter => this.numbers.map(number => `${letter}${number}`))
  }

  chooseCard(code: string) {
    console.log(code);
    // todo
  }

  chooseRandom() {
    this.chooseCard(`${getRandom(this.letters)}${getRandom(this.numbers)}`)
  }
}
