import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"; // dev

@Injectable({
  providedIn: "root"
})
export class SimuladoAPIService {
  constructor(private http: HttpClient, private router: Router) {}

  getCadastraSimulado() {
    return this.http.get<any[]>(`${environment.urlBase}/cadastraSimulado`);
  }

  // a primeira linha do retorno ja é a proxima questão do candidato
  getSimulado(id: any) {
    return this.http.get<any[]>(`${environment.urlBase}/simulado/${id}`);
  }
  // chamado apenas na primeira chamada de alternativas, flegando um modelo de prova
  getSimuladoq1(numModelo: any) {
    return this.http.get<any[]>(
      `${environment.urlBase}/simuladoq1/${numModelo}`
    );
  }
  getNumModelo() {
    return this.http.get<any[]>(`${environment.urlBase}/modelo`);
  }
  // envia uma pergunta respondida
  postSimulado(postData: any) {
    console.log("postData");
    console.log(postData);
    this.http
      .post(`${environment.urlBase}/simulado`, {
        idUser: postData.idUser,
        modelo: postData.modelo,
        pergunta: postData.pergunta,
        selecionado: postData.selecionado
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  // MODELO
  // cadastraUser(postData: any) {
  //   this.http
  //     .post(`${environment.urlBase}/cadastraUser`, {
  //       nome: postData.nome,
  //       sobrenome: postData.sobrenome,
  //       email: postData.email,
  //       senha: postData.senha
  //     })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }
}
