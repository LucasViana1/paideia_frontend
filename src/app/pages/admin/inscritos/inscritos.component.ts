import { Component, OnInit } from '@angular/core';
import {AdmAPIService} from '../../../services/adm-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscritos',
  templateUrl: './inscritos.component.html',
  styleUrls: ['./inscritos.component.css']
})
export class InscritosComponent implements OnInit {
  nome:string;
  inscritos: Array<any>;

  constructor(private service: AdmAPIService, private router: Router) { }

  ngOnInit() {
    if(window.localStorage.getItem('nivel') !== '1'){
      this.router.navigate(['/inicio']);
    }
    this.listar();
    this.nome = window.localStorage.getItem('nome');
  }

  listar(){
    // this.service.listaInscritos().subscribe(dados => this.inscritos = dados)
    // this.service.listaInscritos().subscribe(dados => console.log(dados))
    this.service.listaInscritos().subscribe(dados => this.inscritos = dados);
  }

}
