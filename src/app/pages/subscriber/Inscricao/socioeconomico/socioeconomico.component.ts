import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {SubscriptionAPIService} from '../../../../services/subscription-api.service';
import {Router} from '@angular/router';

@Component({
  selector: "app-socioeconomico",
  templateUrl: "./socioeconomico.component.html",
  styleUrls: ["./socioeconomico.component.css"]
})
export class SocioeconomicoComponent implements OnInit {
  constructor(public fb: FormBuilder, private service: SubscriptionAPIService, private router: Router) {}

  formSocio = this.fb.group({
    sexo: [""],
    idade: [""],
    mora_tempo: [""],
    local: [""],
    mora_pessoas_qtd: [""],
    mora_tipo: [""],
    trab_candidato: [""],
    trab_pais: [""],
    fundamental: [""],
    medio: [""],
    ler: [""],
    ler_qtd: [""],
    informado: [""],
    internet: [""],
    fez_vestibular: [""],
    trab_estudo: [""],
    motivo_estudar: [""],
    transporte: [""],
    // checkbox
    televisao_atividade: [""],
    musica_atividade: [""],
    cinema_atividade: [""],
    leitura_atividade: [""],
    internet_atividade: [""],
    esporte_atividade: [""],
    nenhuma_atividade: [""],
    // checkbox
    mora_pessoas_perentesco_sozinho: [""],
    mora_pessoas_perentesco_pai: [""],
    mora_pessoas_perentesco_mae: [""],
    mora_pessoas_perentesco_esposo: [""],
    mora_pessoas_perentesco_avo: [""],
    mora_pessoas_perentesco_amigo: [""],
  });

  onSubmit() {
    let form = this.formSocio.value;

    // validações
    let feedbackError = '';

    if(form.sexo === ''){
      feedbackError += 'Campo qual o seu gênero não foi preenchido!  \n';
    }
    if(form.idade === ''){
      feedbackError += 'Campo qual a sua idade não foi preenchido!  \n';
    }
    if(form.mora_tempo === ''){
      feedbackError += 'Campo há quanto tempo você mora em Louveira não foi preenchido!  \n';
    }
    if(form.local === ''){
      feedbackError += 'Campo em que localidade da cidade a sua residência se encontra não foi preenchido!  \n';
    }
    if(form.mora_pessoas_qtd === ''){
      feedbackError += 'Campo quantas pessoas moram na sua casa não foi preenchido!  \n';
    }
    if(form.mora_tipo === ''){
      feedbackError += 'Campo a casa onde você mora é não foi preenchido!  \n';
    }
    if(form.trab_candidato === ''){
      feedbackError += 'Campo você exerce alguma atividade remunerada não foi preenchido!  \n';
    }
    if(form.trab_pais === ''){
      feedbackError += 'Campo quais das alternativas expressa melhor a condição de trabalho de seus pais não foi preenchido!  \n';
    }
    if(form.fundamental === ''){
      feedbackError += 'Campo Como você realizou os seus estudos de Ensino Fundamental ou equivalente (EJA) não foi preenchido!  \n';
    }
    if(form.medio === ''){
      feedbackError += 'Campo Como você realizou os seus estudos de Ensino Médio ou equivalente (EJA) não foi preenchido!  \n';
    }
    if(form.ler === ''){
      feedbackError += 'Campo você tem hábito de ler jornais e revistas não foi preenchido!  \n';
    }
    if(form.ler_qtd === ''){
      feedbackError += 'Campo excluindo os livros escolares, quantos livros você lê por ano não foi preenchido!  \n';
    }
    if(form.informado === ''){
      feedbackError += 'Campo Qual é o meio que você mais utiliza para se manter informado não foi preenchido!  \n';
    }
    if(form.internet === ''){
      feedbackError += 'Campo na sua residência você dispões de internet não foi preenchido!  \n';
    }
    if(form.fez_vestibular === ''){
      feedbackError += 'Campo você já prestou vestibular ou Enem não foi preenchido!  \n';
    }
    if(form.trab_estudo === ''){
      feedbackError += 'Campo como você avalia ter estudado e trabalhado durante os seus estudos não foi preenchido!  \n';
    }
    if(form.motivo_estudar === ''){
      feedbackError += 'Campo qual o principal motivo que faria você voltar a estudar ou continuar estudando não foi preenchido!  \n';
    }
    if(form.transporte === ''){
      feedbackError += 'Campo como você faz para se deslocar pela cidade não foi preenchido!  \n';
    }

    if(feedbackError !== ''){
      alert(feedbackError);
    } else{
      this.service.insereSocioeconomico(form);
      window.scrollTo(0, 0);
      this.router.navigate(['/inscricao/conclui']);
    }
  }

  ngOnInit() {
    if(window.localStorage.getItem('nome') === null){
      this.router.navigate(['/inicio']);
    }
  }
}
