import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"; // dev

@Injectable({
  providedIn: "root",
})
export class SubscriptionAPIService {
  constructor(private http: HttpClient, private router: Router) {}

  inserePessoal(postData: any) {
    this.http
      .post(`${environment.urlBase}/insereDadosPessoais`, {
        // idUser: window.localStorage.getItem('id'),
        // codigo: postData.codigo,
        idUser: window.localStorage.getItem("id"),
        nome_completo: `${postData.nome} ${postData.sobrenome}`,
        data_nasc: postData.data,
        cidade_nasc: "",
        estado_nasc: "",
        tel1: postData.tel1,
        tel2: "",
        cpf: postData.cpf,
        rg: postData.rg,
        cidadao: postData.cidadao,
        curso_desejado: postData.curso_desejado,
      })
      .subscribe(
        (res) => {
          // console.log('pessoal res: ')
          // console.log(res)
        },
        (err) => {
          // console.log('pessoal err: ')
          // console.log(err)
        }
      );
  }
  insereArquivos(postData: any) {
    let tamanhoExcedeu = false;
    this.http
      .post(`${environment.urlBase}/insereDadosArquivos`, {
        idUser: window.localStorage.getItem("id"),
        rgCandidato: postData.rgCandidato,
        cpfCandidato: postData.cpfCandidato,
        historico: postData.historico,
        bolsa: postData.bolsa,
        eja: postData.eja, // EJA == Termo Responsabilidade
        medico: "",
        endereco: postData.endereco,
        foto: postData.foto,
        cidadao: postData.cidadao,
        ensinoMedio: "",
        rgResponsavel: "",
        cpfResponsavel: "",
      })
      .subscribe(
        (res) => {
          // console.log("arquivos res: ");
          // console.log(res);
        },
        (err) => {
          // console.log("arquivos err: ");
          // console.log(err);
          // alert('Algum arquivo excedeu o limite de tamanho! Favor ajustar o tamanho do arquivo e enviar novamente.')
          // // LOGICA PARA IMPEDIR QUE O CANDIDATO AVANCE PARA A PROXIMA ETAPA
          // this.router.navigate(['/inscricao/arquivos'])
        }
      );
    // se o tamanho dos arquivos não excedeu
    // if(!tamanhoExcedeu){
    //   console.log('NAVIGATE: arquivos ok')
    // }
  }
  insereSocioeconomico(postData: any) {
    // console.log("socioeconomico postData");
    // console.log(postData);
    this.http
      .post(`${environment.urlBase}/insereDadosSocioeconomicos`, {
        // idUser: window.localStorage.getItem('id'),
        // codigo: postData.codigo,
        idUser: window.localStorage.getItem("id"),
        sexo: postData.sexo,
        idade: postData.idade,
        mora_tempo: postData.mora_tempo,
        local: postData.local,
        mora_pessoas_qtd: postData.mora_pessoas_qtd,
        mora_tipo: postData.mora_tipo,
        trab_candidato: postData.trab_candidato,
        trab_pais: postData.trab_pais,
        fundamental: postData.fundamental,
        medio: postData.medio,
        ler: postData.ler,
        ler_qtd: postData.ler_qtd,
        informado: postData.informado,
        internet: postData.internet,
        fez_vestibular: postData.fez_vestibular,
        trab_estudo: postData.trab_estudo,
        motivo_estudar: postData.motivo_estudar,
        transporte: postData.transporte,
        // checkbox
        televisao_atividade: postData.televisao_atividade,
        musica_atividade: postData.musica_atividade,
        cinema_atividade: postData.cinema_atividade,
        leitura_atividade: postData.leitura_atividade,
        internet_atividade: postData.internet_atividade,
        esporte_atividade: postData.esporte_atividade,
        nenhuma_atividade: postData.nenhuma_atividade,
        // checkbox
        mora_pessoas_perentesco_sozinho:
          postData.mora_pessoas_perentesco_sozinho,
        mora_pessoas_perentesco_pai: postData.mora_pessoas_perentesco_pai,
        mora_pessoas_perentesco_mae: postData.mora_pessoas_perentesco_mae,
        mora_pessoas_perentesco_esposo: postData.mora_pessoas_perentesco_esposo,
        mora_pessoas_perentesco_avo: postData.mora_pessoas_perentesco_avo,
        mora_pessoas_perentesco_amigo: postData.mora_pessoas_perentesco_amigo,
      })
      .subscribe(
        (res) => {
          // console.log("socioeconomico res: ");
          // console.log(res);
        },
        (err) => {
          // console.log("socioeconomico err: ");
          // console.log(err);
        }
      );
  }
}
