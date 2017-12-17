import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gnome } from '../gnome';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ro-gnomes',
  templateUrl: './gnomes.component.html',
  styleUrls: ['./gnomes.component.css']
})
export class GnomesComponent implements OnInit {
  title = 'Gnomes';
  gnomes: Gnome[];
  selectedGnome: Gnome;

  constructor(private dataService: DataService, private router: Router) { }

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
