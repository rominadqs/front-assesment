import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from './core/data.service';

@Component({
  selector: 'ro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFetching: Observable<boolean>;

  constructor(dataService: DataService) {
    this.isFetching = dataService.isFetching;
  }
}