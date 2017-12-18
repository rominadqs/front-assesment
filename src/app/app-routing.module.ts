import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'gnomes'},
  { path: 'gnomes', loadChildren: 'app/gnomes/gnomes.module#GnomesModule'},
  { path: '**', pathMatch: 'full', redirectTo: 'gnomes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
