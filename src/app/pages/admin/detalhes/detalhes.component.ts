import { Component, OnInit } from "@angular/core";
import { AdmAPIService } from "../../../services/adm-api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.css"]
})
export class DetalhesComponent implements OnInit {
  listagem: any;
  rgView: boolean = true;
  cpfView: boolean = false;
  cidadaoView: boolean = false;
  enderecoView: boolean = false;
  historicoView: boolean = false;
  bolsaView: boolean = false;

  constructor(
    private service: AdmAPIService,
    private routeActivated: ActivatedRoute,
    private router: Router,
    private _sanitizationService: DomSanitizer
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem("nivel") !== "1") {
      this.router.navigate(["/inicio"]);
    }
    this.routeActivated.params.subscribe(parametros => {
      if (parametros["id"]) {
        // console.log("params");
        // console.log(parametros["id"]);
        this.detalhes(parametros["id"]);
      }
    });
  }

  detalhes(id: any) {
    this.service
      .detalhesInscritos(id)
      .subscribe(dados => (this.listagem = dados));
  }

  verImg(tipo: any) {
    // console.log(tipo);
    switch (tipo) {
      case "RG":
        this.ocultaTodasImg();
        // (<HTMLSelectElement>document.getElementById("RG")).style.display =
        //   "initial";
        this.rgView = true;
        break;
      case "CPF":
        this.ocultaTodasImg();
        // (<HTMLSelectElement>document.getElementById("CPF")).style.display =
        //   "initial";
        this.cpfView = true;
        break;
      case "ENDERECO":
        this.ocultaTodasImg();
        // (<HTMLSelectElement>document.getElementById("ENDERECO")).style.display =
        //   "initial";
        this.enderecoView = true;
        break;
      case "HISTORICO":
        this.ocultaTodasImg();
        // (<HTMLSelectElement>(
        //   document.getElementById("HISTORICO")
        // )).style.display = "initial";
        this.historicoView = true;
        break;
      case "CIDADAO":
        this.ocultaTodasImg();
        // (<HTMLSelectElement>document.getElementById("CIDADAO")).style.display =
        //   "initial";
        this.cidadaoView = true;
        break;
      case "BOLSA":
        this.ocultaTodasImg();
        // (<HTMLSelectElement>document.getElementById("BOLSA")).style.display =
        //   "initial";
        this.cidadaoView = true;
        break;
    }
  }

  ocultaTodasImg() {
    this.rgView = false;
    this.cpfView = false;
    this.cidadaoView = false;
    this.enderecoView = false;
    this.historicoView = false;
    this.bolsaView = false;
    // (<HTMLSelectElement>document.getElementById("RG")).style.display = "none";
    // (<HTMLSelectElement>document.getElementById("CPF")).style.display = "none";
    // (<HTMLSelectElement>document.getElementById("ENDERECO")).style.display =
    //   "none";
    // (<HTMLSelectElement>document.getElementById("HISTORICO")).style.display =
    //   "none";
    // (<HTMLSelectElement>document.getElementById("CIDADAO")).style.display =
    //   "none";
    // (<HTMLSelectElement>document.getElementById("BOLSA")).style.display =
    //   "none";
  }

  validationSanitizer(yourSrc: any) {
    // var imgSrc = this._sanitizationService.bypassSecurityTrustUrl('data:image/png;base64,' + yourSrc);
    var imgSrc = this._sanitizationService.bypassSecurityTrustUrl(yourSrc);
    return imgSrc;
  }
}
