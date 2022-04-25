import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { HelpComponent } from "../help/help.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {
  }

  openHelp() {
    this.dialog.open(HelpComponent, {
      autoFocus: false,
      maxHeight: '90vh'
    });
  }
}
