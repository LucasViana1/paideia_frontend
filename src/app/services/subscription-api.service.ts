import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // dev

@Injectable({
  providedIn: 'root'
})
export class SubscriptionAPIService {

  constructor(private http: HttpClient, private router: Router) { }

  inserePessoal(postData:any){
    this.http
      .post(`${environment.urlBase}/insereDadosPessoais`, {
        // idUser: window.localStorage.getItem('id'),
        // codigo: postData.codigo,
        idUser: window.localStorage.getItem('id'),
        nome_completo: `${postData.nome} ${postData.sobrenome}`,
        data_nasc: '',
        cidade_nasc: '',
        estado_nasc: '',
        tel1: postData.tel1,
        tel2: '',
        cpf: postData.cpf,
        rg: postData.rg,
        cidadao: postData.cidadao
      })
      .subscribe(
        res => {
          console.log('pessoal res: ')
          console.log(res)

        },
        err => {
          console.log('pessoal err: ')
          console.log(err)

        }
      );
  }
}
