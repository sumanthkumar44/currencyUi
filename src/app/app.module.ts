import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CurrencyHistoryComponent } from './currency-history/currency-history.component';
//import {DataTablesModule} from 'angular-data-table';  

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CurrencyHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
     
    
  //  DataTablesModule,
    //StorageServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
