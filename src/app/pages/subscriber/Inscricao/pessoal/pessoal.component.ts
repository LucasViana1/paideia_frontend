import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

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
  estados = [
   'Selecione','SP','AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SE','TO'
  ]

  constructor(public fb: FormBuilder) { }


  formPessoal = this.fb.group({
    nome_completo: [''],
    data: [''],
    estado: [''],
    cidade: [''],
    tel1: [''],
    tel2: [''],
    cpf: [''],
    rg: [''],
    cidadao: [''],
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
    if(form.estado === '' || form.estado === 'Selecione'){
      feedbackError += 'Campo estado não foi preenchido!  \n';
    }
    if(form.cidade === ''){
      feedbackError += 'Campo cidade não foi preenchido!  \n';
    }
    if(form.tel1 === ''){
      feedbackError += 'Campo telefone 1 não foi preenchido!  \n';
    }
    if(form.tel2 === ''){
      feedbackError += 'Campo telefone 2 não foi preenchido!  \n';
    }
    if(form.cpf === ''){
      feedbackError += 'Campo CPF não foi preenchido!  \n';
    }
    if(form.rg === ''){
      feedbackError += 'Campo RG não foi preenchido!  \n';
    }
    if(form.cidadao === ''){
      feedbackError += 'Campo cartão cidadão não foi preenchido!  \n';
    }
    if(feedbackError !== ''){
      alert(feedbackError);
    }
    // ALTERAR PARA POST A API
    // alert(JSON.stringify(form))
    // IMPLEMENTAR NAVEGAÇÃO AO PROXIMO FORMULARIO
  }

  ngOnInit() {
  }

}
