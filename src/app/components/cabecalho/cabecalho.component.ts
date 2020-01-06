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
  nivel:string = window.localStorage.getItem('nivel');

  constructor(private router: Router) {
    console.log(this.nome);
  }

  logout(){
    window.localStorage.removeItem('nome')
    window.localStorage.removeItem('nivel')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('email')
    this.router.navigate(['/inicio']);
    location.reload();
    // window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.adm = Number.parseInt(window.localStorage.getItem('nivel'));
    this.nome = window.localStorage.getItem('nome');
  }

}
