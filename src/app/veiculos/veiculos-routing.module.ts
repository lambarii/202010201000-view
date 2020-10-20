import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component'

const routes: Routes = [
  { path: 'sin/systst-analise-risco/rest/veiculos-form', component: VeiculosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
