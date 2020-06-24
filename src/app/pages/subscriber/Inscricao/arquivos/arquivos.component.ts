import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { environment } from "../../../../../environments/environment";
import { SubscriptionAPIService } from "../../../../services/subscription-api.service";
import { Router } from "@angular/router";

// limite de caracteres: 1759374
@Component({
  selector: "app-arquivos",
  templateUrl: "./arquivos.component.html",
  styleUrls: ["./arquivos.component.css"],
})
// FORÇAR PREENCHIMENTO DE CAMPOS OBRIGATORIOS
export class ArquivosComponent implements OnInit {
  // constructor() {}
  constructor(
    public fb: FormBuilder,
    private service: SubscriptionAPIService,
    private router: Router
  ) {}
  tamMaximo: number = 1759374;
  // talvez remover
  formArquivos = this.fb.group({
    rgCandidato: [""],
  });

  rgCandidato: any;
  cpfCandidato: any;
  historico: any;
  endereco: any;
  cidadao: any;
  bolsa: any;
  foto: any;
  eja: any;

  onSubmit() {
    this.rgCandidato = (<HTMLSelectElement>(
      document.getElementById("rgCandidatoHidden")
    )).value;
    this.cpfCandidato = (<HTMLSelectElement>(
      document.getElementById("cpfCandidatoHidden")
    )).value;
    this.historico = (<HTMLSelectElement>(
      document.getElementById("historicoHidden")
    )).value;
    this.endereco = (<HTMLSelectElement>(
      document.getElementById("enderecoHidden")
    )).value;
    this.cidadao = (<HTMLSelectElement>(
      document.getElementById("cidadaoHidden")
    )).value;
    this.bolsa = (<HTMLSelectElement>(
      document.getElementById("bolsaHidden")
    )).value;
    this.foto = (<HTMLSelectElement>(
      document.getElementById("fotoHidden")
    )).value;
    this.eja = (<HTMLSelectElement>document.getElementById("ejaHidden")).value;

    // validação
    let feedbackError = "";
    if (this.rgCandidato === "" || this.rgCandidato === null) {
      feedbackError += "Campo RG não foi preenchido! \n";
    }
    if (this.cpfCandidato === "" || this.cpfCandidato === null) {
      feedbackError += "Campo CPF não foi preenchido! \n";
    }
    if (this.historico === "" || this.historico === null) {
      feedbackError +=
        "Campo Histórico escolar, declaração de matrícula, comprovante de matrícula ou conclusão do ensino médio não foi preenchido! \n";
    }
    if (this.cidadao === "" || this.cidadao === null) {
      feedbackError += "Campo cartão cidadão não foi preenchido! \n";
    }
    if (this.endereco === "" || this.endereco === null) {
      feedbackError += "Campo comprovante de endereço não foi preenchido! \n";
    }
    if (this.foto === "" || this.foto === null) {
      feedbackError += "Campo foto não foi preenchido! \n";
    }
    if (this.eja === "" || this.eja === null) {
      feedbackError += "Campo termo de responsabilidade não foi preenchido! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      let feedbackErrorLimit = "";
      if (this.rgCandidato.length > this.tamMaximo) {
        feedbackErrorLimit += "Campo RG excedeu o limite aceito! \n";
      }
      if (this.cpfCandidato.length > this.tamMaximo) {
        feedbackErrorLimit += "Campo CPF excedeu o limite aceito! \n";
      }
      if (this.historico.length > this.tamMaximo) {
        feedbackErrorLimit +=
          "Campo histórico escolar, declaração de matrícula, comprovante de matrícula ou conclusão do ensino médio excedeu o limite aceito! \n";
      }
      if (this.endereco.length > this.tamMaximo) {
        feedbackErrorLimit +=
          "Campo comprovante de endereço excedeu o limite aceito! \n";
      }
      if (this.cidadao.length > this.tamMaximo) {
        feedbackErrorLimit +=
          "Campo cartão cidadão excedeu o limite aceito! \n";
      }
      if (this.eja.length > this.tamMaximo) {
        feedbackErrorLimit +=
          "Campo termo de responsabilidade excedeu o limite aceito! \n";
      }
      if (this.bolsa.length > this.tamMaximo) {
        feedbackErrorLimit += "Campo bolsa excedeu o limite aceito! \n";
      }
      if (this.foto.length > this.tamMaximo) {
        feedbackErrorLimit += "Campo foto excedeu o limite aceito! \n";
      }
      if (feedbackErrorLimit !== "") {
        alert(feedbackErrorLimit);
      } else {
        this.service.insereArquivos({
          rgCandidato: this.rgCandidato,
          cpfCandidato: this.cpfCandidato,
          historico: this.historico,
          endereco: this.endereco,
          cidadao: this.cidadao,
          bolsa: this.bolsa,
          foto: this.foto,
          eja: this.eja,
        });
        this.router.navigate(["/inscricao/socioeconomico"]);
        window.scrollTo(0, 0);
      }
      // alert('Arquivos enviados para análise. Caso algum exceda o tamanho limite, voce será redireciado novamente ao'+
      //   'formulário de envio de arquivos.');
    }
  }

  ngOnInit() {
    if (window.localStorage.getItem("nome") === null) {
      this.router.navigate(["/inicio"]);
    }
  }

  // showTermo(tipo: any) {

  //   let linkSource = "";
  //   let fileName = "";
  //   for (let i = 0; i < this.listagem.dados.length; i++) {
  //     if (tipo === this.listagem.dados[i].tipo) {
  //       linkSource = this.listagem.dados[i].arquivo;
  //       fileName = `${this.listagem.dados[i].tipo}.pdf`;
  //     }
  //   }

  //   const downloadLink = document.createElement("a");

  //   downloadLink.href = linkSource;
  //   downloadLink.download = fileName;
  //   downloadLink.click();
  // }
}

// opção para conversao de base 64
// base64textString = [];
//   onUploadChange(evt: any) {
//     const file = evt.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = this.handleReaderLoaded.bind(this);
//       reader.readAsBinaryString(file);
//     }
//   }
//   handleReaderLoaded(e) {
//     this.base64textString.push(
//       "data:image/png;base64," + btoa(e.target.result)
//     );
//   }
//   // ver base64, para testes
//   base64() {
//     console.log(this.base64textString);
//   }
