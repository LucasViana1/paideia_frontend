import { Component, OnInit } from "@angular/core";
import { SimuladoAPIService } from "./../../../services/simulado-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-simulado-download-modelos",
  templateUrl: "./simulado-download-modelos.component.html",
  styleUrls: ["./simulado-download-modelos.component.css"]
})
export class SimuladoDownloadModelosComponent implements OnInit {
  listagem: any;
  retorno: any;
  modeloSelecionado: number = 1;
  gabaritoAtual: any[] = [];

  constructor(private service: SimuladoAPIService, private router: Router) { }

  async ngOnInit() {
    this.retorno = await this.getGabaritoModelos();
    // console.log(this.retorno);
  }

  async getGabaritoModelos() {
    this.listagem = await this.service.getGabaritoModelos().toPromise();
    return this.listagem;
  }

  selecionaModelo(num) {
    this.modeloSelecionado = num;
    this.renderGabarito();
  }

  renderGabarito() {
    // pegando apenas registros do modelo selecionado
    this.gabaritoAtual = [];
    for (let i = 0; i < this.retorno.length; i++) {
      if (this.retorno[i].modelo === this.modeloSelecionado) {
        this.gabaritoAtual.push(this.retorno[i]);
      }
    }
    // console.log("this.gabaritoAtual");
    // console.log(this.gabaritoAtual);
  }
}
