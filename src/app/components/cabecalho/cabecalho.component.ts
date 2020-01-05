import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  adm:number;
  nome:string;

  constructor(private router: Router) {
    console.log(this.nome);
  }

  logout(){
    window.localStorage.removeItem('nome')
    window.localStorage.removeItem('nivel')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('email')
    this.router.navigate(['/inicio']);
    window.scrollTo(0, 0);
    location.reload();
  }

  ngOnInit() {
    this.adm = Number.parseInt(window.localStorage.getItem('nivel'));
    this.nome = window.localStorage.getItem('nome');
  }

}
