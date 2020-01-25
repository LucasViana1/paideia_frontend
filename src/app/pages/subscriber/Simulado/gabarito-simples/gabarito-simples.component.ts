import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-gabarito-simples",
  templateUrl: "./gabarito-simples.component.html",
  styleUrls: ["./gabarito-simples.component.css"]
})
export class GabaritoSimplesComponent implements OnInit {
  listagem: any;
  idUser: number = Number(window.localStorage.getItem("id"));

  constructor(private service: SimuladoAPIService, private router: Router) {}

  ngOnInit() {
    this.getGabaritoSimples(this.idUser);
  }

  getGabaritoSimples(id: any) {
    this.service.getGabaritoSimples(id).subscribe(dados => {
      this.listagem = dados;
    });
  }
}
