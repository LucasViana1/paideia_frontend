import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  postData = {
    nome: "teste nome2",
    sobrenome: "teste nosobrenomeme2",
    email: "teste email2",
    senha: "teste senha2"
  };

  url = "http://localhost:3000/cadastraUser";

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.http
      .post(this.url, this.postData)
      .toPromise()
      .then(data => {
        console.log("ok");
      });
  }

  formCadastro = this.fb.group({
    nome: [""],
    sobrenome: [""],
    email: [""],
    senha: [""],
    confirmaSenha: [""]
  });

  onSubmit() {
    let form = this.formCadastro.value;
    alert(JSON.stringify(form));
  }

  ngOnInit() {}
}
