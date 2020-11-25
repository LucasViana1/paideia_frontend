import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"; // dev
import { SimuladoAPIService } from "../services/simulado-api.service";

@Injectable({
  providedIn: "root"
})
export class UsersAPIService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private simuladoService: SimuladoAPIService
  ) { }

  cadastraUser(postData: any) {
    this.http
      .post(`${environment.urlBase}/cadastraUser`, {
        nome: postData.nome,
        sobrenome: postData.sobrenome,
        email: postData.email,
        senha: postData.senha
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err.error.text);
          const resp = err.error.text;
          if (resp === "cadastro duplicado!") {
            alert("E-mail já possui cadastro");
          } else {
            alert("Cadastro realizado com sucesso!");
          }
          this.router.navigate(["/acesso"]);
          window.scrollTo(0, 0);
        }
      );
  }
  loginUser(postData: any) {
    this.http
      .post(`${environment.urlBase}/login`, {
        email: postData.email,
        senha: postData.senha
      })
      .subscribe(
        res => {
          if (res[0].ativo === 0) {
            window.localStorage.setItem("id", res[0].id);
            window.localStorage.setItem("nome", res[0].nome);
            this.router.navigate(["/valida"]);
            window.scrollTo(0, 0);
          } else if (res[0].ativo == 1 || res[0].adm == 1) {
            // POSTERIORMENTE PERMITIR QUE APENAS INSCRITOS ACESSEM
            // else if((res[0].ativo == 1 && res[0].inscrito_atual == 1) || res[0].adm == 1){
            //guardar na sessao nome e nivel de acesso
            this.router.navigate(["/inicio"]);

            window.localStorage.setItem("id", res[0].id);
            window.localStorage.setItem("nome", res[0].nome);
            window.localStorage.setItem("nivel", res[0].adm);
            window.localStorage.setItem("email", res[0].email);
            window.localStorage.setItem(
              "inscrito_atual",
              res[0].inscrito_atual
            );
            location.reload();
          }
        },
        err => {
          // console.log(err.error.text);
          const resp = err.error.text;
          if (resp === "E-mail ou senha inválidos!") {
            alert("E-mail ou senha inválidos!");
          } else {

          }
        }
      );

  }
  validaUser(postData: any) {
    // console.log("id do user: " + window.localStorage.getItem("id"));
    this.http
      .post(`${environment.urlBase}/valida`, {
        idUser: window.localStorage.getItem("id"),
        codigo: postData.codigo
      })
      .subscribe(
        res => {
          // console.log("valida res: ");
          // console.log(res);
          //guardar na sessao nome e nivel de acesso
          window.localStorage.setItem("id", res[0].id);
          window.localStorage.setItem("nome", res[0].nome);
          window.localStorage.setItem("nivel", res[0].adm);
          window.localStorage.setItem("email", res[0].email);
          alert("E-mail validado com sucesso!");
          this.router.navigate(["/inicio"]);
          location.reload();
        },
        err => {
          alert("Código incorreto!");
        }
      );
  }
  recuperaUser(postData: any) {
    this.http
      .post(`${environment.urlBase}/recuperaSenha`, {
        email: postData.rec_email
      })
      .subscribe(
        res => {
        },
        err => {
        }
      );
  }
}
