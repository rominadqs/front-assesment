import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/reduce';


import { ConfigService } from './config.service';

@Injectable()
export class DataService {
  private api: string;
  isFetching: Observable<boolean>;
  constructor(public http: Http, private configService: ConfigService) {
    this.api = this.configService.apiUrl;
  }

  getGnomes(){
    return this.http.get(this.api)
    .map((res:Response) => res.json().Brastlewark);
    //.map(gnomes => this.sortBy(gnomes, 'name'));
  }

  getGnomeById(id: number) {
    return this.getGnomes().map(gnomes => {
      return gnomes && gnomes.find ? gnomes.find(c => c.id === id) : undefined;
    });
  }
}
