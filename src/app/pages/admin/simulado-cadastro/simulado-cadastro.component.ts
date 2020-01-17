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
  materias = [
    "Selecione",
    "Física",
    "Biologia",
    "Matemática",
    "História",
    "Química",
    "Geografia",
    "Gramática",
    "Sociologia",
    "Filosofia",
    "Artes",
    "Inglês"
  ];

  constructor(
    public fb: FormBuilder,
    /*private service: UsersAPIService,*/ private router: Router
  ) {}

  formSimuladoCadastro = this.fb.group({
    linkImg: [""],
    materia: [""],
    enunciado: [""],
    resp_a: [""],
    resp_b: [""],
    resp_c: [""],
    resp_d: [""],
    resp_e: [""],
    correta: [""]
  });

  onSubmit() {
    let form = this.formSimuladoCadastro.value;
    let feedbackError = "";

    if (form.enunciado === "") {
      feedbackError += "Campo enunciado não foi preenchido! \n";
    }
    if (form.resp_a === "") {
      feedbackError += "Campo resp A não foi preenchido! \n";
    }
    if (form.resp_b === "") {
      feedbackError += "Campo resp B não foi preenchido! \n";
    }
    if (form.resp_c === "") {
      feedbackError += "Campo resp C não foi preenchido! \n";
    }
    if (form.resp_d === "") {
      feedbackError += "Campo resp D não foi preenchido! \n";
    }
    if (form.resp_e === "") {
      feedbackError += "Campo resp E não foi preenchido! \n";
    }
    if (form.correta === "") {
      feedbackError += "Campo Correta não foi preenchido! \n";
    }
    if (form.materia === "" || form.materia === "Selecione") {
      feedbackError += "Campo Matéria não foi preenchido! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      // ENVIAR A API NOVA PERGUNTA DO SIMULADO
      // this.service.inserePessoal(form);
      // this.router.navigate(["/inscricao/arquivos"]);
      console.log(form);
    }
  }

  ngOnInit() {}
}
