import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataService } from './data.service';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    DataService,
    ConfigService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
        const msg = 'CoreModule has already been loaded. Import Core modules in the AppModule only.';
        throw new Error(msg);
      }
  }
}
