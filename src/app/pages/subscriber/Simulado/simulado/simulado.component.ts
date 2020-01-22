import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-simulado",
  templateUrl: "./simulado.component.html",
  styleUrls: ["./simulado.component.css"]
})
export class SimuladoComponent implements OnInit {
  listagem: any;
  idUser: any = 118; // PEGAR DO LOCALSTORAGE
  numModelo: any;

  constructor(
    public fb: FormBuilder,
    private service: SimuladoAPIService,
    private router: Router
  ) {}

  formSimulado = this.fb.group({
    nome: [""],
    sobrenome: [""],
    curso_desejado: [""]
  });

  onSubmit() {
    let form = this.formSimulado.value;
    let feedbackError = "";

    if (form.nome_completo === "") {
      feedbackError += "Campo nome não foi preenchido! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      console.log(form);
      // this.service.inserePessoal(form);
      // this.router.navigate(['/inscricao/arquivos'])
    }
  }

  ngOnInit() {
    this.getSimulado(this.idUser);
    this.getNumModelo();
  }

  getSimulado(id: any) {
    this.service.getSimulado(id).subscribe(dados => {
      this.listagem = dados;
    });
  }
  getNumModelo() {
    this.service.getNumModelo().subscribe(dados => {
      this.numModelo = dados;
    });
  }
}
/*
ROTEIRO GENERICO:
getModelo para passar como parametro para a primeira pergunta (na tela inicial de normas)
getGabarito para contar o progresso do aluno e impedir que volte alternativas (atraves de um contador)
pelo contador do getGabarito ir exibindo cada pergunta na requisição dos simulados
*/
