import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,comp_list } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonData} from './services/CommonData'
import {sBar} from "./services/sBar"
import {MaterialModule} from './material/material.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {FieldsError} from './resusable/FieldsError'
import {Backend} from './services/Backend';
import { ErrorComponent } from './error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    comp_list,
    FieldsError,
    sBar,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CommonData,Backend],
  bootstrap: [AppComponent]
})
export class AppModule { }
