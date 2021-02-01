import { Component, OnInit } from "@angular/core";
import { AdmAPIService } from "../../../services/adm-api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.css"],
})
export class DetalhesComponent implements OnInit {
  listagem: any;
  rgView: boolean = true;
  cpfView: boolean = false;
  cidadaoView: boolean = false;
  enderecoView: boolean = false;
  historicoView: boolean = false;
  bolsaView: boolean = false;
  ejaView: boolean = false;

  constructor(
    private service: AdmAPIService,
    private routeActivated: ActivatedRoute,
    private router: Router,
    private _sanitizationService: DomSanitizer
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem("nivel") !== "1") {
      this.router.navigate(["/inicio"]);
    }
    this.routeActivated.params.subscribe((parametros) => {
      if (parametros["id"]) {
        this.detalhes(parametros["id"]);
      }
    });
  }

  detalhes(id: any) {
    this.service.detalhesInscritos(id).subscribe((dados) => {
      this.listagem = dados;
    });
  }

  verImg(tipo: any) {
    switch (tipo) {
      case "RG":
        this.ocultaTodasImg();
        this.rgView = true;
        break;
      case "CPF":
        this.ocultaTodasImg();
        this.cpfView = true;
        break;
      case "ENDERECO":
        this.ocultaTodasImg();
        this.enderecoView = true;
        break;
      case "HISTORICO":
        this.ocultaTodasImg();
        this.historicoView = true;
        break;
      case "CIDADAO":
        this.ocultaTodasImg();
        this.cidadaoView = true;
        break;
      case "BOLSA":
        this.ocultaTodasImg();
        this.cidadaoView = true;
        break;
      case "EJA":
        this.ocultaTodasImg();
        this.ejaView = true;
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
    this.ejaView = false;
  }

  validationSanitizer(yourSrc: any) {
    return this._sanitizationService.bypassSecurityTrustUrl(yourSrc);
  }
  showPdf(tipo: any) {
    let linkSource = "";
    let fileName = "";
    for (let i = 0; i < this.listagem.dados.length; i++) {
      if (tipo === this.listagem.dados[i].tipo) {
        linkSource = this.listagem.dados[i].arquivo;
        fileName =
          tipo !== "EJA" ? `${this.listagem.dados[i].tipo}.pdf` : `termo.pdf`;
      }
    }

    const downloadLink = document.createElement("a");

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
