import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VeiculosService } from '../../veiculos.service';
import { Veiculo } from '../veiculo'

@Component({
  selector: 'app-veiculos-lista',
  templateUrl: './veiculos-lista.component.html',
  styleUrls: ['./veiculos-lista.component.css']
})
export class VeiculosListaComponent implements OnInit {

  veiculos: Veiculo[] = [];
  classificacao: string;

  constructor(
    private service: VeiculosService, 
    private router: Router) {  }

  ngOnInit(): void {
    this.service
    .getVeiculos()
    .subscribe( resposta => this.veiculos = resposta );
  }

  novoCadastro(){
    this.router.navigate(['sin/systst-analise-risco/rest/veiculos-form']);
  }

}
