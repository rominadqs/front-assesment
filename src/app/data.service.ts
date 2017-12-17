import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  isFetching: Observable<boolean>;
  constructor(public http: Http) { }

  getGnomes(){
    return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .map((res:Response) => res.json().Brastlewark);
    //.map(gnomes => this.sortBy(gnomes, 'name'));
  }
}
