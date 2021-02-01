import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-resultado-simulado",
  templateUrl: "./resultado-simulado.component.html",
  styleUrls: ["./resultado-simulado.component.css"]
})
export class ResultadoSimuladoComponent implements OnInit {
  listagem: any;
  idUser: number = Number(window.localStorage.getItem("id"));
  qtdAcertos: number = 0;

  constructor(private service: SimuladoAPIService, private router: Router) { }

  ngOnInit() {
    this.getSimuladoResultado(this.idUser);
  }

  downloadPdf(modelo: any) {
    let linkSource = "";
    let fileName = "resultado_simulado.pdf";

    switch (modelo) {
      case 1:
        linkSource =
          "../../../../../assets/resultado_simulados/simulado2/simulado 2 modelo 1 (1 sem 2020).pdf";
        break;
      case 2:
        linkSource =
          "../../../../../assets/resultado_simulados/simulado2/simulado 2 modelo 2 (1 sem 2020).pdf";
        break;
      case 3:
        linkSource =
          "../../../../../assets/resultado_simulados/simulado2/simulado 2 modelo 3 (1 sem 2020).pdf";
        break;
      case 4:
        linkSource =
          "../../../../../assets/resultado_simulados/simulado2/simulado 2 modelo 4 (1 sem 2020).pdf";
        break;
      default:
        console.log("erro ao identificar modelo de simulado");
    }

    const downloadLink = document.createElement("a");

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  getSimuladoResultado(id: any) {
    this.service.getResultadoSimuladoAluno(id).subscribe(resp => {
      this.listagem = resp;


      let countAcertos = 0;
      for (let i = 0; i < this.listagem.dados.length; i++) {

        if (this.listagem.dados[i].acertou === "s") {
          countAcertos++;
        }
      }
      this.qtdAcertos = countAcertos;

    });
  }
}
