import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatListModule, MatProgressBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GnomesComponent } from './gnomes/gnomes.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    GnomesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    HttpModule,
    MatProgressBarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
