import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"; // dev

@Injectable({
  providedIn: "root"
})
export class UsersAPIService {
  constructor(private http: HttpClient, private router: Router) {}

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
        // ajustar requisição para que não caia no erro
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

    // .toPromise()
    // .then(data => {
    //   console.log('retorno achado:')
    //   // console.log(data);
    //   // console.log(data.toString());
    // }).catch(err =>{
    //   console.log('erro achado:')
    //   // console.log(err)
    // })
  }
  loginUser(postData: any) {
    this.http
      .post(`${environment.urlBase}/login`, {
        email: postData.email,
        senha: postData.senha
      })
      .subscribe(
        res => {
          // console.log('resposta ok:');
          // console.log(res);
          // console.log(res[0].ativo)
          if (res[0].ativo === 0) {
            //validação de email
            // console.log("valida email");
            window.localStorage.setItem("id", res[0].id);
            window.localStorage.setItem("nome", res[0].nome);
            this.router.navigate(["/valida"]);
            window.scrollTo(0, 0);
          } else if (res[0].ativo == 1 || res[0].adm == 1) {
            // POSTERIORMENTE PERMITIR QUE APENAS INSCRITOS ACESSEM
            // else if((res[0].ativo == 1 && res[0].inscrito_atual == 1) || res[0].adm == 1){
            //guardar na sessao nome e nivel de acesso
            this.router.navigate(["/inicio"]);
            // console.log("acesso ok");
            window.localStorage.setItem("id", res[0].id);
            window.localStorage.setItem("nome", res[0].nome);
            window.localStorage.setItem("nivel", res[0].adm);
            window.localStorage.setItem("email", res[0].email);
            location.reload();
            // window.scrollTo(0, 0);
          }
        },
        err => {
          // console.log(err.error.text);
          const resp = err.error.text;
          if (resp === "E-mail ou senha inválidos!") {
            alert("E-mail ou senha inválidos!");
          } else {
            // console.log("login ok");
            // console.log(err);
            // alert("Cadastro realizado com sucesso!")
            // OK
          }
          // this.router.navigate(['/acesso']);
          // window.scrollTo(0, 0);
        }
      );

    // .toPromise()
    // .then(data => {
    //   console.log('retorno achado:')
    //   // console.log(data);
    //   // console.log(data.toString());
    // }).catch(err =>{
    //   console.log('erro achado:')
    //   // console.log(err)
    // })
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
          // console.log("valida err: ");
          // console.log(err);
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
          // console.log("recupera res:");
          // console.log(res);
        },
        err => {
          // console.log("recupera err:");
          // console.log(err);
        }
      );
  }
}
