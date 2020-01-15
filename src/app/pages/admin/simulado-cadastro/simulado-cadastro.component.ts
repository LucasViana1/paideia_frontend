import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
// import {UsersAPIService} from '../../../../services/users-api.service';
// INSERIR API PARA SIMULADOS
import { Router } from "@angular/router";

@Component({
  selector: "app-simulado-cadastro",
  templateUrl: "./simulado-cadastro.component.html",
  styleUrls: ["./simulado-cadastro.component.css"]
})
export class SimuladoCadastroComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    /*private service: UsersAPIService,*/ private router: Router
  ) {}

  formSimuladoCadastro = this.fb.group({
    linkImg: [""],
    enunciado: [""]
  });

  onSubmit() {
    const form = this.formSimuladoCadastro.value;
    console.log(form);
  }

  ngOnInit() {}
}
