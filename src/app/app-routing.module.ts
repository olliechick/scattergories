import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HostComponent } from "./host/host.component";
import { GuestComponent } from "./guest/guest.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'host', component: HostComponent },
  { path: 'guest', component: GuestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
