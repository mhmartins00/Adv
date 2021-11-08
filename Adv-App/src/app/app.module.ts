import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcoesComponent } from './Acoes/Acoes.component';

import {enableProdMode} from '@angular/core'

@NgModule({
  declarations: [
    AppComponent,
      AcoesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*enableProdMode();*/

