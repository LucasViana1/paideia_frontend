import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscritos',
  templateUrl: './inscritos.component.html',
  styleUrls: ['./inscritos.component.css']
})
export class InscritosComponent implements OnInit {
  nome:string;

  constructor() { }

  ngOnInit() {
    this.nome = window.localStorage.getItem('nome');
  }

}
