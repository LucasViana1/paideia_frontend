import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

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
