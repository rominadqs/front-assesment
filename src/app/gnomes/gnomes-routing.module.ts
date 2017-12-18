import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GnomesComponent } from './gnomes.component';
import { GnomeListComponent } from './gnome-list/gnome-list.component';
import { GnomeDetailComponent } from './gnome-detail/gnome-detail.component';

const routes: Routes = [
  {
    path: '', component: GnomesComponent, children: [
      {
        path: '', component: GnomeListComponent, children: [
          { path: ':id', component: GnomeDetailComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnomesRoutingModule { }
