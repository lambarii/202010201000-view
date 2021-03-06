import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { VeiculosModule } from './veiculos/veiculos.module';
import { VeiculosService } from './veiculos.service';

import { CurrencyMaskModule  } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    VeiculosModule,
    CurrencyMaskModule
  ],
  providers: [
    VeiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
