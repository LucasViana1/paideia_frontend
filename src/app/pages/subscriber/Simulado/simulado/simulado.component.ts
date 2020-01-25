import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-simulado",
  templateUrl: "./simulado.component.html",
  styleUrls: ["./simulado.component.css"]
})
export class SimuladoComponent implements OnInit {
  listagem: any;
  idUser: number = Number(window.localStorage.getItem("id"));
  numModelo: any;
  inicio: boolean; // oculta/exibe tela de inicio de simulado
  iniTempo: string;
  fimTempo: string;
  tempo: any; // resp da hora fim/inicio

  constructor(
    public fb: FormBuilder,
    private service: SimuladoAPIService,
    private router: Router
  ) {}

  formSimulado = this.fb.group({
    selecionado: [""]
  });

  iniciarSimulado() {
    window.localStorage.setItem("simulado", "1");
    this.getSimuladoq1(this.numModelo); // seta modelo da prova
    window.scrollTo(0, 0);
    this.inicio = false; // oculta normas no inicio e exibe tela de perguntas/alternativas
    this.getHoraInicioFim();

    this.service.postHoraInicioFim({
      idUser: this.idUser,
      horaInicio: this.iniTempo,
      horaFimMax: this.fimTempo
    });
  }

  onSubmit() {
    // LOGICA PARA MARCAR TEMPO DE INICIO/FIM DA PROVA

    let form = this.formSimulado.value;
    let feedbackError = "";

    if (form.selecionado === "" || form.selecionado === null) {
      feedbackError += "Selecione ao menos uma alternativa! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      // console.log(118);
      // console.log(this.listagem.dados[0].modelo);
      // console.log(this.listagem.dados[0].pergunta);
      // console.log(form.selecionado);
      this.service.postSimulado({
        idUser: this.idUser,
        modelo: this.listagem.dados[0].modelo,
        pergunta: this.listagem.dados[0].pergunta,
        selecionado: form.selecionado
      });
      // BUSCAR MELHOR SOLUÇÃO PARA ATUALIZAR AS PERGUNTAS
      // this.getSimulado(this.idUser);
      window.location.reload();
      window.scrollTo(0, 0);
    }
  }

  ngOnInit() {
    if (window.localStorage.getItem("nome") === null) {
      window.scrollTo(0, 0);
      this.router.navigate(["/inicio"]);
    }
    if (window.localStorage.getItem("simulado") != "1") {
      this.inicio = true;
    } else {
      this.inicio = false;
    }

    this.getNumModelo(); // apenas valido na primeira chamada, nas demais o nº do modelo fica desatualizada
    this.getSimulado(this.idUser);
    this.getHora(this.idUser);
  }

  getSimuladoq1(numModelo: any) {
    this.service.getSimuladoq1(numModelo).subscribe(dados => {
      this.listagem = dados;
    });
  }
  getSimulado(id: any) {
    this.service.getSimulado(id).subscribe(dados => {
      this.listagem = dados;
      console.log("this.listagem");
      console.log(this.listagem.dados[0]);
      // LOGICA PARA CASO O ALUNO JA TENHA INICIADO A PROVA E SAIU ANTERIORMENTE
      // if (typeof this.listagem.dados[0] === undefined) {
      //   this.inicio = false;
      // } else {
      //   this.inicio = true;
      // }
    });
  }
  getNumModelo() {
    this.service.getNumModelo().subscribe(dados => {
      this.numModelo = dados;
    });
  }
  getHora(id: any) {
    this.service.getHoraInicioFim(id).subscribe(data => {
      this.tempo = data;
      this.iniTempo = this.tempo.dados[0].horaInicio;
      this.fimTempo = this.tempo.dados[0].horaFimMax;
      console.log("this.tempo.dados[0].horaInicio");
      console.log(this.iniTempo);
      console.log("this.tempo.dados[0].horaFimMax");
      console.log(this.fimTempo);
      // this.tempo = response.data;
      // this.iniTempo = this.tempo.dados[0].horaInicio;
      // this.fimTempo = this.tempo.dados[0].horaFimMax;

      // console.log("this.tempo.dados[0].horaInicio");
      // console.log(this.tempo.dados[0].horaInicio);
      // console.log("this.tempo.dados[0].horaFimMax");
      // console.log(this.tempo.dados[0].horaFimMax);
    });
  }
  // pega data inicial e final do aluno
  getHoraInicioFim() {
    let data = new Date();
    let horaIni = "00" + data.getHours();
    let minutoIni = "00" + data.getMinutes();
    let segundoIni = "00" + data.getSeconds();
    let horaFim = "00" + (data.getHours() + 2);
    let minutoFim = "00" + data.getMinutes();
    let segundoFim = "00" + data.getSeconds();
    this.iniTempo = `${horaIni.slice(-2)}:${minutoIni.slice(
      -2
    )}:${segundoIni.slice(-2)}`;

    this.fimTempo = `${horaFim.slice(-2)}:${minutoFim.slice(
      -2
    )}:${segundoFim.slice(-2)}`;

    console.log(this.iniTempo);
    console.log(this.fimTempo);
  }
}
/*
ROTEIRO GENERICO:
getModelo para passar como parametro para a primeira pergunta (na tela inicial de normas)
getGabarito para contar o progresso do aluno e impedir que volte alternativas (atraves de um contador)
pelo contador do getGabarito ir exibindo cada pergunta na requisição dos simulados
*/
