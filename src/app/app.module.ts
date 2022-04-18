import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { HostComponent } from './host/host.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { TimePipe } from "./host/time.pipe";
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HostComponent,
    TimePipe,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
