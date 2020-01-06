import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {Router} from '@angular/router'
import {SubscriptionAPIService} from '../../../../services/subscription-api.service';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.component.html',
  styleUrls: ['./pessoal.component.css']
})
export class PessoalComponent implements OnInit {

  // mascaras
  public telefone = ['(', /[1-9]/, /\d/, ')', /\d/,/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public data = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public cpf = [/[0-9]/, /\d/, /\d/, '.', /\d/,/\d/,/\d/, '.', /\d/, /\d/, /\d/, '-',/\d/,/\d/];
  public rg = [/[0-9]/, /\d/, '.', /\d/,/\d/,/\d/, '.', /\d/, /\d/, /\d/, '-',/\d/];
  public cidadao = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  // estados = [
  //  'Selecione','SP','AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SE','TO'
  // ]

  constructor(public fb: FormBuilder, private service: SubscriptionAPIService, private router: Router) { }

  formPessoal = this.fb.group({
    nome: [''],
    sobrenome: [''],
    data: [''],
    // estado: [''],
    // cidade: [''],
    tel1: [''],
    // tel2: [''],
    cpf: [''],
    rg: [''],
    cidadao: [''],
    curso_desejado: [''], // ADD CAMPO NO BACK
  })

  onSubmit() {
    let form = this.formPessoal.value;
    let feedbackError = '';

    if(form.nome_completo === ''){
      feedbackError += 'Campo nome não foi preenchido! \n';
    }
    if(form.data === ''){
      feedbackError += 'Campo data não foi preenchido!  \n';
    }
    // if(form.estado === '' || form.estado === 'Selecione'){
    //   feedbackError += 'Campo estado não foi preenchido!  \n';
    // }
    // if(form.cidade === ''){
    //   feedbackError += 'Campo cidade não foi preenchido!  \n';
    // }
    if(form.tel1 === ''){
      feedbackError += 'Campo telefone não foi preenchido!  \n';
    }
    // if(form.tel2 === ''){
    //   feedbackError += 'Campo telefone 2 não foi preenchido!  \n';
    // }
    if(form.cpf === ''){
      feedbackError += 'Campo CPF não foi preenchido!  \n';
    }
    if(form.rg === ''){
      feedbackError += 'Campo RG não foi preenchido!  \n';
    }
    if(form.cidadao === ''){
      feedbackError += 'Campo cartão cidadão não foi preenchido!  \n';
    }
    if(form.curso_desejado === ''){
      feedbackError += 'Campo curso desejado não foi preenchido!  \n';
    }
    if(feedbackError !== ''){
      alert(feedbackError);
    }else{
      this.service.inserePessoal(form);
      this.router.navigate(['/inscricao/arquivos'])
    }

    // ALTERAR PARA POST A API
    // alert(JSON.stringify(form))
    // IMPLEMENTAR NAVEGAÇÃO AO PROXIMO FORMULARIO
  }

  ngOnInit() {
    if(window.localStorage.getItem('nome') === null){
      window.scrollTo(0, 0);
      this.router.navigate(['/inicio']);
    }
  }

}
