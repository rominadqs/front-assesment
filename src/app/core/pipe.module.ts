import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
     console.log(value);
     console.log(field);
   return value 
   ?  items.filter(it => it[field].indexOf(value)!== -1)
   : items;
 }
}