import { Component, OnInit } from '@angular/core';
import {AdmAPIService} from '../../../services/adm-api.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  listagem:any;
  rgView:boolean = false;
  cpfView:boolean = false;
  cidadaoView:boolean = false;
  enderecoView:boolean = false;
  historicoView:boolean = false;
  bolsaView:boolean = false;

  constructor(private service: AdmAPIService, private routeActivated: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(window.localStorage.getItem('nivel') !== '1'){
      this.router.navigate(['/inicio']);
    }
    this.routeActivated.params.subscribe( parametros => {
      if (parametros['id']) {
        console.log('params')
        console.log(parametros['id'])
        this.detalhes(parametros['id']);
      }
    });
  }

  detalhes(id:any){
    this.service.detalhesInscritos(id).subscribe(dados => this.listagem = dados);
  }

  verImg(tipo:any){
    console.log(tipo)
    switch(tipo){
      case 'RG':
        this.ocultaTodasImg();
        (<HTMLSelectElement>document.getElementById('RG')).style.display = 'initial';
        break;
      case 'CPF':
        this.ocultaTodasImg();
        (<HTMLSelectElement>document.getElementById('CPF')).style.display = 'initial';
        break;
      case 'ENDERECO':
        this.ocultaTodasImg();
        (<HTMLSelectElement>document.getElementById('ENDERECO')).style.display = 'initial';
        break;
      case 'HISTORICO':
        this.ocultaTodasImg();
        (<HTMLSelectElement>document.getElementById('HISTORICO')).style.display = 'initial';
        break;
      case 'CIDADAO':
        this.ocultaTodasImg();
        (<HTMLSelectElement>document.getElementById('CIDADAO')).style.display = 'initial';
        break;
      case 'BOLSA':
        this.ocultaTodasImg();
        (<HTMLSelectElement>document.getElementById('BOLSA')).style.display = 'initial';
        break;
    }
  }

  ocultaTodasImg(){
    (<HTMLSelectElement>document.getElementById('RG')).style.display = 'none';
    (<HTMLSelectElement>document.getElementById('CPF')).style.display = 'none';
    (<HTMLSelectElement>document.getElementById('ENDERECO')).style.display = 'none';
    (<HTMLSelectElement>document.getElementById('HISTORICO')).style.display = 'none';
    (<HTMLSelectElement>document.getElementById('CIDADAO')).style.display = 'none';
    (<HTMLSelectElement>document.getElementById('BOLSA')).style.display = 'none';
  }

}
