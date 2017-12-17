import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomesComponent } from './gnomes/gnomes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'gnomes'},
  { path: 'gnomes', component: GnomesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'gnomes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
