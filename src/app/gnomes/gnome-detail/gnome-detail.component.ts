import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

import {ConfigService, DataService, Gnome } from '../../core';

@Component({
  selector: 'ro-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.css']
})
export class GnomeDetailComponent implements OnInit {
  @Input() gnome: Gnome;
  revealModel = false;

  private onDestroy = new Subject();

  constructor(
    private dataService: DataService,
    private configService: ConfigService,
    private route: ActivatedRoute) { }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  ngOnInit() {
    this.route.params.map(params => parseInt(params['id'], 10))
      .takeUntil(this.onDestroy)
      .switchMap(id => this.dataService.getGnomeById(id))
      .subscribe(gnome => this.gnome = gnome);
  }

}
