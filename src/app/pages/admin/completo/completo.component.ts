import { Component, OnInit } from "@angular/core";
import { AdmAPIService } from "../../../services/adm-api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-completo",
  templateUrl: "./completo.component.html",
  styleUrls: ["./completo.component.css"]
})
export class CompletoComponent implements OnInit {
  listagem: any;

  constructor(
    private service: AdmAPIService,
    private routeActivated: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem("nivel") !== "1") {
      this.router.navigate(["/inicio"]);
    }
    this.routeActivated.params.subscribe(parametros => {
      if (parametros["id"]) {
        this.completo(parametros["id"]);
      }
    });
  }
  completo(id: any) {
    this.service
      .completoInscritos(id)
      .subscribe(dados => (this.listagem = dados));
  }
  onlyNumber(num) {
    let resp = num;
    for (let i = 0; i < num.length; i++) {
      if (num[i].indexOf("_") != -1) {
        resp = num.slice(0, i + 1);
      }
    }
    return resp;
  }
}
