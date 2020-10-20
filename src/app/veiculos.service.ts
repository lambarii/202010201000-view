import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Veiculo } from './veiculos/veiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { 
    
  }

  salvar( veiculo: Veiculo ) : Observable<Veiculo> {
    return this.http.post<Veiculo>('http://localhost:8080/sin/systst-analise-risco/rest/veiculos', veiculo);
  }

  getVeiculos() : Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>('http://localhost:8080/sin/systst-analise-risco/rest/veiculos');
  }


}
