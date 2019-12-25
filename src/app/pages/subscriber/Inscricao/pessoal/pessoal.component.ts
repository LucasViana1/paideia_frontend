import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.component.html',
  styleUrls: ['./pessoal.component.css']
})
export class PessoalComponent implements OnInit {

  estados = [
   'SP','AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SE','TO'
  ]
  // estados = [
  //  {estado: 'SP'},
  //  {estado: 'AC'}
  // ]
  constructor() { }

  ngOnInit() {
  }

}
