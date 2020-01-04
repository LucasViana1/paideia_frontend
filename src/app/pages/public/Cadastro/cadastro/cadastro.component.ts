import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {UsersAPIService} from '../../../../services/users-api.service';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  postData:any;


  constructor(public fb: FormBuilder, private service: UsersAPIService) {
    this.postData = {
      nome: "teste nome3",
      sobrenome: "teste nosobrenomeme3",
      email: "teste email3",
      senha: "teste senha3"
    };
  }

  formCadastro = this.fb.group({
    nome: [""],
    sobrenome: [""],
    email: [""],
    senha: [""],
    confirmaSenha: [""]
  });

  onSubmit() {
    this.service.cadastraUser(this.postData);
    // let form = this.formCadastro.value;
    // alert(JSON.stringify(form));
  }

  ngOnInit() {}
}
