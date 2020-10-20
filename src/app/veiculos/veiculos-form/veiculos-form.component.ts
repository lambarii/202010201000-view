import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Veiculo } from '../veiculo'
import { VeiculosService } from '../../veiculos.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-veiculos-form',
  templateUrl: './veiculos-form.component.html',
  styleUrls: ['./veiculos-form.component.css']
})
export class VeiculosFormComponent implements OnInit {

  veiculo: Veiculo;
  success: boolean = false;
  errors: String[];
  listaAnos: String[];
  
  constructor( 
    private service: VeiculosService,
    private router: Router) {
    this.veiculo = new Veiculo();

  }

  ngOnInit(): void {
    this.listaAnos = [ 
      "2020", 
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      "2005",
      "2004",
      "2003",
      "2002",
      "2001",
      "2000",
    ];
  }


  onSubmit(){
    this.service
    .salvar(this.veiculo)
    .subscribe( response => {
      this.success = true;
      this.errors = null;
      this.veiculo = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    })
  }

  voltarParaListagem() {
    this.router.navigate(['sin/systst-analise-risco/rest/veiculos']);
  }

}
