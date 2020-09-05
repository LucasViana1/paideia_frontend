import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-gabarito-simples",
  templateUrl: "./gabarito-simples.component.html",
  styleUrls: ["./gabarito-simples.component.css"],
})
export class GabaritoSimplesComponent implements OnInit {
  listagem: any;
  idUser: number = Number(window.localStorage.getItem("id"));
  qtdFisica: number = 0;
  qtdBiologia: number = 0;
  qtdMatematica: number = 0;
  qtdHistoria: number = 0;
  qtdQuimica: number = 0;
  qtdGeografia: number = 0;
  qtdGramatica: number = 0;
  qtdSociologia: number = 0;
  qtdFilosofia: number = 0;
  qtdArtes: number = 0;
  qtdIngles: number = 0;
  qtdTotal: number;

  constructor(private service: SimuladoAPIService, private router: Router) {}

  ngOnInit() {
    if (window.localStorage.getItem("nome") === null) {
      window.scrollTo(0, 0);
      this.router.navigate(["/inicio"]);
    }
    this.getGabaritoSimples(this.idUser);
  }

  getGabaritoSimples(id: any) {
    this.service.getGabaritoSimples(id).subscribe((resp) => {
      this.listagem = resp;
      // console.log(this.listagem.dados[0]);
      for (let i = 0; i < this.listagem.dados.length; i++) {
        switch (this.listagem.dados[i].materia) {
          case "Física":
            if (this.listagem.dados[i].acertou === "s") this.qtdFisica++;
            break;
          case "Biologia":
            if (this.listagem.dados[i].acertou === "s") this.qtdBiologia++;
            break;
          case "Matemática":
            if (this.listagem.dados[i].acertou === "s") this.qtdMatematica++;
            break;
          case "História":
            if (this.listagem.dados[i].acertou === "s") this.qtdHistoria++;
            break;
          case "Química":
            if (this.listagem.dados[i].acertou === "s") this.qtdQuimica++;
            break;
          case "Geografia":
            if (this.listagem.dados[i].acertou === "s") this.qtdGeografia++;
            break;
          case "Português":
            if (this.listagem.dados[i].acertou === "s") this.qtdGramatica++;
            break;
          case "Inglês":
            if (this.listagem.dados[i].acertou === "s") this.qtdIngles++;
            break;
          // case "Arte":
          //   if (this.listagem.dados[i].acertou === "s") this.qtdArtes++;
          //   break;
          // case "Sociologia":
          //   if (this.listagem.dados[i].acertou === "s") this.qtdSociologia++;
          //   break;
          // case "Filosofia":
          //   if (this.listagem.dados[i].acertou === "s") this.qtdFilosofia++;
          //   break;
          // case "Gramática":
          //   if (this.listagem.dados[i].acertou === "s") this.qtdGramatica++;
          //   break;

          default:
            console.log("Falha ao identificar a matéria");
            break;
        }
      }
      this.qtdTotal =
        this.qtdFisica +
        this.qtdBiologia +
        this.qtdMatematica +
        this.qtdHistoria +
        this.qtdQuimica +
        this.qtdGeografia +
        this.qtdGramatica +
        this.qtdSociologia +
        this.qtdFilosofia +
        this.qtdArtes +
        this.qtdIngles;
    });
  }
}
