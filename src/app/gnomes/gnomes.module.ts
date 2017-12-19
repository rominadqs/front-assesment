import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule, MatProgressBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { GnomesRoutingModule } from './gnomes-routing.module';
import { GnomesComponent } from './gnomes.component';
import { GnomeDetailComponent } from './gnome-detail/gnome-detail.component';
import { GnomeListComponent } from './gnome-list/gnome-list.component';
import { SearchFilterPipe } from '../core/pipe.module';
@NgModule({
  imports: [
    GnomesRoutingModule,
    MatListModule, 
    MatProgressBarModule,
    MatInputModule,
    CommonModule
  ],
  declarations: [
    GnomesComponent,
    GnomeListComponent,
    GnomeDetailComponent,
    SearchFilterPipe
  ]
})
export class GnomesModule { }
