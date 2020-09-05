import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-simulado",
  templateUrl: "./simulado.component.html",
  styleUrls: ["./simulado.component.css"],
})
export class SimuladoComponent implements OnInit {
  listagem: any;
  retorno: any;
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
    selecionado: [""],
  });

  async iniciarSimulado() {
    // window.localStorage.setItem("simulado", "1");
    // this.getSimuladoq1(this.numModelo); // seta modelo da prova
    this.retorno = await this.getSimuladoq1(this.numModelo);
    window.scrollTo(0, 0);
    this.inicio = false; // oculta normas no inicio e exibe tela de perguntas/alternativas
    this.getHoraInicioFim();

    this.service.postHoraInicioFim({
      idUser: this.idUser,
      horaInicio: this.iniTempo,
      horaFimMax: this.fimTempo,
    });
  }

  onSubmit() {
    // SMP ALTERAR NUMERO ENTRE SIMULADOS
    window.localStorage.setItem("simulado", "5");
    let form = this.formSimulado.value;
    let feedbackError = "";

    if (form.selecionado === "" || form.selecionado === null) {
      feedbackError += "Selecione ao menos uma alternativa! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      this.service.postSimulado({
        idUser: this.idUser,
        modelo: this.retorno.modelo,
        pergunta: this.retorno.pergunta,
        selecionado: form.selecionado,
      });
      // BUSCAR MELHOR SOLUÇÃO PARA ATUALIZAR AS PERGUNTAS

      // quando for respondida a ultima pergunta, COLOCAR Nº DA ULTIMA PERGUNTA
      if (this.listagem.dados[0].pergunta == 24) {
        // if(this.listagem.dados[0].pergunta == 50){
        this.router.navigate(["/gabarito-simples"]);
      } else {
        window.location.reload();
        window.scrollTo(0, 0);
      }
    }
  }

  getGabaritoSimples(id: any) {
    this.service.getGabaritoSimples(id).subscribe((resp) => {
      this.listagem = resp;
      // console.log(this.listagem.dados[0]);
      let cont = 0;
      for (let i = 0; i < this.listagem.dados.length; i++) {
        cont++;
      }
      // CONT DEVE SER IGUAL AO Nº DE PERGUNTAS TOTAIS
      if (cont >= 24) {
        this.router.navigate(["/gabarito-simples"]);
      }
    });
  }

  async ngOnInit() {
    if (window.localStorage.getItem("nome") === null) {
      window.scrollTo(0, 0);
      this.router.navigate(["/inicio"]);
    }

    // caso o aluno ja tenha respondido todas as questões
    this.getGabaritoSimples(this.idUser);

    if (window.localStorage.getItem("simulado") != "5") {
      this.inicio = true;
    } else {
      this.inicio = false;
    }

    this.getNumModelo(); // apenas valido na primeira chamada, nas demais o nº do modelo fica desatualizada
    this.retorno = await this.getSimulado(this.idUser);
    this.getHora(this.idUser);
    // while (this.listagem === undefined) {
    //   this.getSimulado(this.idUser);
    // }
  }

  async getSimuladoq1(numModelo: any) {
    this.listagem = await this.service.getSimuladoq1(numModelo).toPromise();
    return this.listagem.dados[0];
    // this.service.getSimuladoq1(numModelo).subscribe(dados => {
    //   this.listagem = dados;
    // });
  }
  async getSimulado(id: any) {
    // console.log("teste promisses");
    // console.log(this.service.getSimulado(id).toPromise());
    this.listagem = await this.service.getSimulado(id).toPromise();

    // this.retorno = await this.listagem.dados[0];
    // console.log("this.retorno");
    // console.log(this.retorno);
    return this.listagem.dados[0];

    // this.service.getSimulado(id).subscribe(dados => {
    //   this.listagem = dados;
    //   console.log("this.listagem");
    //   console.log(this.listagem.dados[0]);
    // });
  }
  getNumModelo() {
    this.service.getNumModelo().subscribe((dados) => {
      this.numModelo = dados;
      // console.log("this.numModelo");
      // console.log(this.numModelo);
    });
  }
  getHora(id: any) {
    this.service.getHoraInicioFim(id).subscribe((data) => {
      this.tempo = data;
      this.iniTempo = this.tempo.dados[0].horaInicio;
      this.fimTempo = this.tempo.dados[0].horaFimMax;

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
    let horaFim = "00" + this.verificaHoraFim(data.getHours());
    let minutoFim = "00" + data.getMinutes();
    let segundoFim = "00" + data.getSeconds();
    this.iniTempo = `${horaIni.slice(-2)}:${minutoIni.slice(
      -2
    )}:${segundoIni.slice(-2)}`;

    this.fimTempo = `${horaFim.slice(-2)}:${minutoFim.slice(
      -2
    )}:${segundoFim.slice(-2)}`;
  }

  verificaHoraFim(horaFim: any) {
    let horaFimFinal = "00";
    // ADICIONANDO 2 HORAS, LOGO TOTAL DE 2 HORAS DE DURAÇÃO DE SIMULADO MAXIMO
    if (horaFim + 2 < 24) {
      horaFimFinal = horaFim + 2;
    }
    return horaFimFinal;
  }
}
/*
ROTEIRO GENERICO:
getModelo para passar como parametro para a primeira pergunta (na tela inicial de normas)
getGabarito para contar o progresso do aluno e impedir que volte alternativas (atraves de um contador)
pelo contador do getGabarito ir exibindo cada pergunta na requisição dos simulados
*/
