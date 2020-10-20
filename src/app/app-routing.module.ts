import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VeiculosListaComponent } from './veiculos/veiculos-lista/veiculos-lista.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sin/systst-analise-risco/rest/veiculos', component: VeiculosListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
