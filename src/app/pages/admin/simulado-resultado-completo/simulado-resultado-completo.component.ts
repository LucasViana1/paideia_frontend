import { Component, OnInit } from "@angular/core";
import { SimuladoAPIService } from "./../../../services/simulado-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-simulado-resultado-completo",
  templateUrl: "./simulado-resultado-completo.component.html",
  styleUrls: ["./simulado-resultado-completo.component.css"]
})
export class SimuladoResultadoCompletoComponent implements OnInit {
  listagem: any;
  constructor(private service: SimuladoAPIService, private router: Router) {}

  ngOnInit() {
    if (window.localStorage.getItem("nivel") !== "1") {
      this.router.navigate(["/inicio"]);
    }
    this.getResultadoSimuladoCompleto();
  }

  getResultadoSimuladoCompleto() {
    this.service.getResultadoSimulado().subscribe(dados => {
      this.listagem = dados;
      this.calculoAcertos();
    });
  }
  calculoAcertos() {
    let itens = this.listagem.dados;
    let result = [];
    let cont = 0;
    let mat1 = '';
    console.log("itens");
    console.log(itens);
    // percorre todas as linhas retornadas da api
    for (let i = 0; i < this.listagem.dados.length; i++) {
      if(i === 0) mat1 = this.listagem.dados[i].materia;
      // verifica se a proxima linha será da msm materia analisada atualmente
      // console.log('teste')
      // let prox = i + 1;
      // console.log(this.listagem.dados[prox].materia)

      // let mat2 = this.listagem.dados[prox].materia;
      // if (this.listagem.dados[i].materia === this.listagem.dados[i + 1].materia) {
      // if (mat1 === mat2) {
      // verifica se aluno acertou
      if (this.listagem.dados[i].acertou === "s") {
        cont++;
      }
      // }
      // reseta infos para novo aluno, e armazena o resultado do antigo aluno
      // else {
      cont++;
      result.push({
        nome: `${this.listagem.dados[i].nome} ${this.listagem.dados[i].sobrenome}`,
        materia: this.listagem.dados[i].materia,
        acertos: cont
      });
      cont = 0;
      // }
      let mat1 = this.listagem.dados[i].materia;
    }
    console.log("result");
    console.log(result);
  }
}
