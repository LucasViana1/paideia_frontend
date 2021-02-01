import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UsersAPIService } from '../../../../services/users-api.service';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {

  constructor(public fb: FormBuilder, private service: UsersAPIService) {

  }

  formCadastro = this.fb.group({
    nome: [""],
    sobrenome: [""],
    email: [""],
    senha: [""],
    confirmaSenha: [""]
  });

  onSubmit() {
    const form = this.formCadastro.value;
    let feedbackError = '';
    if (form.senha !== form.confirmaSenha) {
      alert('A senha está divergente!');
    }
    else {

      if (form.nome === '') {
        feedbackError += 'Campo nome não foi preenchido! \n';
      }
      if (form.sobrenome === '') {
        feedbackError += 'Campo Sobrenome não foi preenchido!  \n';
      }
      if (form.email === '') {
        feedbackError += 'Campo e-mail não foi preenchido!  \n';
      }
      if (form.senha === '') {
        feedbackError += 'Campo senha não foi preenchido!  \n';
      }
      if (feedbackError !== '') {
        alert(feedbackError);
      } else {
        this.service.cadastraUser(form);
      }
    }
  }

  ngOnInit() { }
}
