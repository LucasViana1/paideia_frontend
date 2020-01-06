import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {environment} from '../../../../../environments/environment';
import {SubscriptionAPIService} from '../../../../services/subscription-api.service';
import {Router} from '@angular/router';

// limite de caracteres: 1759374
@Component({
  selector: "app-arquivos",
  templateUrl: "./arquivos.component.html",
  styleUrls: ["./arquivos.component.css"]
})
// FORÇAR PREENCHIMENTO DE CAMPOS OBRIGATORIOS
export class ArquivosComponent implements OnInit {
  // constructor() {}
  constructor(public fb: FormBuilder, private service: SubscriptionAPIService, private router: Router) {}

  // talvez remover
  formArquivos = this.fb.group({
    rgCandidato: [""],
  });

  rgCandidato:any;
  cpfCandidato:any;
  historico:any;
  endereco:any;
  cidadao:any;
  bolsa:any;

  onSubmit() {
    this.rgCandidato = (<HTMLSelectElement>document.getElementById('rgCandidatoHidden')).value;
    this.cpfCandidato = (<HTMLSelectElement>document.getElementById('cpfCandidatoHidden')).value;
    this.historico = (<HTMLSelectElement>document.getElementById('historicoHidden')).value;
    this.endereco = (<HTMLSelectElement>document.getElementById('enderecoHidden')).value;
    this.cidadao = (<HTMLSelectElement>document.getElementById('cidadaoHidden')).value;
    this.bolsa = (<HTMLSelectElement>document.getElementById('bolsaHidden')).value;

    // validação
    let feedbackError = '';
    if(this.rgCandidato === '' || this.rgCandidato === null){
      feedbackError += 'Campo RG não foi preenchido! \n';
    }
    if(this.cpfCandidato === '' || this.cpfCandidato === null){
      feedbackError += 'Campo CPF não foi preenchido! \n';
    }
    if(this.historico === '' || this.historico === null){
      feedbackError += 'Campo Histórico escolar, declaração de matrícula, comprovante de matrícula ou conclusão do ensino médio não foi preenchido! \n';
    }
    if(this.cidadao === '' || this.cidadao === null ){
      feedbackError += 'Campo cartão cidadão não foi preenchido! \n';
    }
    if(this.endereco === '' || this.endereco === null){
      feedbackError += 'Campo comprovante de endereço não foi preenchido! \n';
    }
    if(feedbackError !== ''){
      alert(feedbackError);
    } else{
      this.service.insereArquivos({
        rgCandidato: this.rgCandidato,
        cpfCandidato: this.cpfCandidato,
        historico: this.historico,
        endereco: this.endereco,
        cidadao: this.cidadao,
        bolsa: this.bolsa,
      });
      this.router.navigate(['/inscricao/socioeconomico']);
      window.scrollTo(0, 0);
    }

  }

  ngOnInit() {
    if(window.localStorage.getItem('nome') === null){
      this.router.navigate(['/inicio']);
    }
  }
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
