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

  getSimulado(id: any) {
    return this.http.get<any[]>(`${environment.urlBase}/simulado/${id}`);
  }
  getNumModelo() {
    return this.http.get<any[]>(`${environment.urlBase}/modelo`);
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
