import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';

import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular core library 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //ng-material
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,

    PatientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
