import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router'
import { SubscriptionAPIService } from '../../../../services/subscription-api.service';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.component.html',
  styleUrls: ['./pessoal.component.css']
})
export class PessoalComponent implements OnInit {

  public telefone = ['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public data = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public cpf = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public rg = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  public cidadao = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(public fb: FormBuilder, private service: SubscriptionAPIService, private router: Router) { }

  formPessoal = this.fb.group({
    nome: [''],
    sobrenome: [''],
    data: [''],
    tel1: [''],
    cpf: [''],
    rg: [''],
    cidadao: [''],
    curso_desejado: [''],
  })

  onSubmit() {
    let form = this.formPessoal.value;
    let feedbackError = '';

    if (form.nome_completo === '') {
      feedbackError += 'Campo nome não foi preenchido! \n';
    }
    if (form.data === '') {
      feedbackError += 'Campo data não foi preenchido!  \n';
    }
    if (form.tel1 === '') {
      feedbackError += 'Campo telefone não foi preenchido!  \n';
    }
    if (form.cpf === '') {
      feedbackError += 'Campo CPF não foi preenchido!  \n';
    }
    if (form.rg === '') {
      feedbackError += 'Campo RG não foi preenchido!  \n';
    }
    if (form.cidadao === '') {
      feedbackError += 'Campo cartão cidadão não foi preenchido!  \n';
    }
    if (form.curso_desejado === '') {
      feedbackError += 'Campo curso desejado não foi preenchido!  \n';
    }
    if (feedbackError !== '') {
      alert(feedbackError);
    } else {
      this.service.inserePessoal(form);
      this.router.navigate(['/inscricao/arquivos'])
    }
  }

  ngOnInit() {
    if (window.localStorage.getItem('nome') === null) {
      window.scrollTo(0, 0);
      this.router.navigate(['/inicio']);
    }
  }

}
