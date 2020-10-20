import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';
import { VeiculosListaComponent } from './veiculos-lista/veiculos-lista.component';

import { TableFilterPipe } from 'src/app/veiculos/veiculos-lista/table-filter.pipe';

import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    VeiculosFormComponent,
    VeiculosListaComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule,
    CurrencyMaskModule
  ],
  exports: [
    VeiculosFormComponent,
    VeiculosListaComponent
  ]
})
export class VeiculosModule { }
