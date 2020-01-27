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
    console.log("itens");
    console.log(itens);
  }
}
