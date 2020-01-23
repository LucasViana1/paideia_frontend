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
    selecionado: [""]
  });

  onSubmit() {
    let form = this.formSimulado.value;
    let feedbackError = "";

    if (form.selecionado === "" || form.selecionado === null) {
      feedbackError += "Selecione ao menos uma alternativa! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      console.log(118);
      console.log(this.listagem.dados[0].modelo);
      console.log(this.listagem.dados[0].pergunta);
      console.log(form.selecionado);
      this.service.postSimulado({
        idUser: 118, // PEGAR DO LOCALSTORAGE
        modelo: this.listagem.dados[0].modelo,
        pergunta: this.listagem.dados[0].pergunta,
        selecionado: form.selecionado
      });
      // BUSCAR MELHOR SOLUÇÃO PARA ATUALIZAR AS PERGUNTAS
      // this.getSimulado(this.idUser);
      window.location.reload();
      window.scrollTo(0, 0);
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
