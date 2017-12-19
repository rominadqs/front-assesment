import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule} from '@angular/material';
import { Gnome, ConfigService, DataService } from '../../core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ro-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.css']
})
export class GnomeListComponent implements OnDestroy, OnInit {
  title = 'Gnomes';
  gnomes: Gnome[];
  selectedGnome: Gnome;

  private subscription: Subscription;

  constructor(
    private configService: ConfigService,
    private dataService: DataService,
    private router: Router) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.dataService.getGnomes()
      .subscribe(gnomes => this.gnomes = gnomes);
  }

  selectGnome(gnome: Gnome){
    this.selectedGnome = gnome;
    this.router.navigate(['gnomes', gnome.id]);
    console.log(gnome);
  }

}
