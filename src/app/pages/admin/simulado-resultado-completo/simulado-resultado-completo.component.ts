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
  lista: any;
  itens: any[] = [];
  qtdFisica: number = 0;
  qtdBiologia: number = 0;
  qtdMatematica: number = 0;
  qtdHistoria: number = 0;
  qtdQuimica: number = 0;
  qtdGeografia: number = 0;
  qtdGramatica: number = 0;
  // qtdSociologia: number = 0;
  // qtdFilosofia: number = 0;
  // qtdArtes: number = 0;
  // qtdIngles: number = 0;
  qtdTotal: number;
  constructor(private service: SimuladoAPIService, private router: Router) { }

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
    for (let i = 0; i < this.listagem.dados.length; i++) {
      this.getGabaritoSimples(
        this.listagem.dados[i].idUser,
        this.listagem.dados[i].matricula,
        this.listagem.dados[i].nome,
        this.listagem.dados[i].sobrenome
      );
    }
  }
  getGabaritoSimples(id: any, matricula: any, nome: any, sobrenome: any) {
    this.service.getGabaritoSimples(id).subscribe(resp => {
      this.lista = resp;
      // console.log(this.lista.dados[0]);
      for (let i = 0; i < this.lista.dados.length; i++) {
        switch (this.lista.dados[i].materia) {
          case "Física":
            if (this.lista.dados[i].acertou === "s") this.qtdFisica++;
            break;
          case "Biologia":
            if (this.lista.dados[i].acertou === "s") this.qtdBiologia++;
            break;
          case "Matemática":
            if (this.lista.dados[i].acertou === "s") this.qtdMatematica++;
            break;
          case "História":
            if (this.lista.dados[i].acertou === "s") this.qtdHistoria++;
            break;
          case "Química":
            if (this.lista.dados[i].acertou === "s") this.qtdQuimica++;
            break;
          case "Geografia":
            if (this.lista.dados[i].acertou === "s") this.qtdGeografia++;
            break;
          case "Português":
            if (this.lista.dados[i].acertou === "s") this.qtdGramatica++;
            break;
          // case "Sociologia":
          //   if (this.lista.dados[i].acertou === "s") this.qtdSociologia++;
          //   break;
          // case "Filosofia":
          //   if (this.lista.dados[i].acertou === "s") this.qtdFilosofia++;
          //   break;
          // case "Artes":
          //   if (this.lista.dados[i].acertou === "s") this.qtdArtes++;
          //   break;
          // case "Inglês":
          //   if (this.lista.dados[i].acertou === "s") {
          //     this.qtdIngles++;
          //     // console.log("this.qtdIngles");
          //     // console.log(this.qtdIngles);
          //   }
          //   break;
          default:
            console.log("Falha ao identificar a matéria");
            break;
        }
      }
      // console.log("barr teste");
      // console.log("this.qtdBiologia");
      // console.log(this.qtdBiologia);
      this.qtdTotal =
        this.qtdFisica +
        this.qtdBiologia +
        this.qtdMatematica +
        this.qtdHistoria +
        this.qtdQuimica +
        this.qtdGeografia +
        this.qtdGramatica;
      // this.qtdSociologia +
      // this.qtdFilosofia +
      // this.qtdArtes +
      // this.qtdIngles;
      this.itens.push({
        nome: `${nome} ${sobrenome}`,
        matricula: matricula,
        qtdFisica: this.qtdFisica,
        qtdBiologia: this.qtdBiologia,
        qtdMatematica: this.qtdMatematica,
        qtdHistoria: this.qtdHistoria,
        qtdQuimica: this.qtdQuimica,
        qtdGeografia: this.qtdGeografia,
        qtdGramatica: this.qtdGramatica,
        // qtdSociologia: this.qtdSociologia,
        // qtdFilosofia: this.qtdFilosofia,
        // qtdArtes: this.qtdArtes,
        // qtdIngles: this.qtdIngles,
        qtdTotal: this.qtdTotal
      });
      // console.log("this.itens");
      // console.log(this.itens);
      this.qtdFisica = 0;
      this.qtdBiologia = 0;
      this.qtdMatematica = 0;
      this.qtdHistoria = 0;
      this.qtdQuimica = 0;
      this.qtdGeografia = 0;
      this.qtdGramatica = 0;
      // this.qtdSociologia = 0;
      // this.qtdFilosofia = 0;
      // this.qtdArtes = 0;
      // this.qtdIngles = 0;
      this.qtdTotal = 0;
    });
  }
}
