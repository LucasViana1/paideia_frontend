import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-termos",
  templateUrl: "./termos.component.html",
  styleUrls: ["./termos.component.css"],
})
export class TermosComponent implements OnInit {
  normas = [
    {
      norma:
        "A Frequência é obrigatória e condição de permanência do (a) aluno (a) no curso preparatório.",
    },
    {
      norma:
        "O (A) aluno (a) que faltar nos dois primeiros dias de aula na primeira semana de curso será automaticamente excluído.",
    },
    {
      norma:
        "Também será eliminado (a) o (a) aluno (a) que faltar duas vezes consecutivas ou alternadas na mesma semana, nas sequências sexta/segunda e emenda de feriados.",
    },
    { norma: "O (a) aluno (a) terá direito a quatro faltas no semestre." },
    {
      norma:
        "Devido o curso preparatório ser modalidade intensivo e de curta duração não serão admitidos quaisquer tipos de afastamento temporário como para viagens de lazer ou estudo, curso de CFC e outros eventos que concorram com os dias e horário das aulas do preparatório. Essas faltas não serão abonadas e acarretarão no desligamento do (a) aluno (a) do preparatório.",
    },
    {
      norma:
        "Os afastamentos por doença ou trabalho serão abonados desde que notificados e justificados através de documentação legal. (atestado médico ou declaração em papel timbrado da empresa e com a assinatura do responsável legal).",
    },
    {
      norma:
        "O (A) aluno (a) que se inscrever a uma das vagas oferecidas e por motivos alheios não comunicar a sua desistência perderá o direito de se reinscrever no preparatório pelo período de um semestre letivo.",
    },
    {
      norma:
        "Verificada a impossibilidade de frequentar ou continuar o curso preparatório o aluno deverá comunicar por escrito a sua desistência ao coordenador pedagógico.",
    },
    {
      norma:
        "É obrigação do (a) aluno (a):  realizar os simulados online e entregar  todos os exercícios propostos pelos professores durante as aulas online. A entrega dos exercícios durante o período das aulas online validarão a frequencia do (a) aluno (a) na aula.",
    },
    {
      norma:
        "É proibido ao aluno do preparatório apresentar atitudes e comportamento incompatíveis com o ambiente de aula. Qualquer atitude que comprometa o bom andamento do preparatório acarretará no cancelamento da matrícula e desligamento do aluno do projeto. Portanto, é dever do aluno: observar o horário de início e fim da aula online, respeitar os professores, colegas e demais pessoas que estejam no mesmo ambiente virtual.",
    },
  ];
  aceitar: boolean = false;

  marked = false;
  theCheckbox = false;

  constructor(private router: Router) { }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  next() {
    this.router.navigate(["/inscricao/pessoal"]);
  }

  ngOnInit() { }
}

// NORMAS NO PRESENCIAL:
// normas = [
//   {norma: 'A Frequência é obrigatória e condição de permanência do (a) aluno (a) no curso preparatório.'},
//   {norma: 'O (A) aluno (a) que faltar nos dois primeiros dias de aula na primeira semana de curso será automaticamente excluído.'},
//   {norma: 'Também será eliminado (a) o (a) aluno (a) que faltar duas vezes consecutivas ou alternadas na mesma semana, nas sequências sexta/segunda e emenda de feriados.'},
//   {norma: 'O (a) aluno (a) terá direito a quatro faltas no semestre.'},
//   {norma: 'Devido o curso preparatório ser modalidade intensivo e de curta duração não serão admitidos quaisquer tipos de afastamento temporário como para viagens de lazer ou estudo, curso de CFC e outros eventos que concorram com os dias e horário das aulas do preparatório. Essas faltas não serão abonadas e acarretarão no desligamento do (a) aluno (a) do preparatório.'},
//   {norma: 'Os afastamentos por doença ou trabalho serão abonados desde que notificados e justificados através de documentação legal. (atestado médico ou declaração em papel timbrado da empresa e com a assinatura do responsável legal).'},
//   {norma: 'O (A) aluno (a) que se inscrever a uma das vagas oferecidas e por motivos alheios não comunicar a sua desistência perderá o direito de se reinscrever no preparatório pelo período de um semestre letivo.'},
//   {norma: 'Verificada a impossibilidade de frequentar ou continuar o curso preparatório o aluno deverá comunicar por escrito a sua desistência ao coordenador pedagógico.'},
//   {norma: 'É obrigação do (a) aluno (a): trazer o material escolar todos os dias, sobretudo o material didático adotado pelo curso preparatório, comparecer às avaliações, realizar os simulados presenciais e online e entregar feitos todos os exercícios propostos.'},
//   {norma: 'A aquisição do material didático é responsabilidade do aluno, sendo proibida a reprodução (cópia) do mesmo à art. 5o inciso VII da Lei de Direitos Autorais e art. 184 do Código Penal.'},
//   {norma: 'O (A) aluno (a) regularmente matriculado terá 15 dias, contados a partir do primeiro dia de aula para entregar uma fotografia recente tamanho (3x4) para o coordenador pedagógico para confecção de crachá a ser utilizado no acesso à escola ou quando solicitado.'},
//   {norma: 'É proibido ao aluno do preparatório apresentar atitudes e comportamento incompatíveis com o ambiente de aula. Qualquer atitude que comprometa o bom andamento do preparatório acarretará no cancelamento da matrícula e desligamento do aluno do projeto. Portanto, é dever do aluno: observar o horário de entrada e saída da sala de aula, manter-se em silêncio durante as explicações do professor, respeitar os professores, colegas, funcionários, diretores e demais pessoas que coabitam o espaço escolar.'},
//   {norma: 'É expressamente proibido o uso de celulares ou quaisquer outros aparelhos eletrônicos em sala de aula conforme Lei Estadual no 12.730 de 11/10/2007.'},
//   {norma: 'Preservar o patrimônio público dentro e fora do prédio escolar. Não serão tolerados quaisquer danos e depredações ao bem público. É dever do aluno: preservar a limpeza dos ambientes (chão, banheiros, mesas do refeitório, carteiras, paredes, etc.). Preservar e proteger os trabalhos e atividades de alunos de outros períodos.'},
//   {norma: 'Observar discrição ao se vestir, ao falar e ao agir no ambiente escolar. É expressamente proibido fumar no interior do prédio bem como nas dependências externas do mesmo (jardins e área do estacionamento) conforme Lei Estadual no 13.541 de 07/05/2009.'},
//   {norma: 'Não se envolver em qualquer forma de violência (agressão física ou psicológica que denote racismo ou discriminação por atuação partidária, orientação religiosa ou orientação sexual).'},
//   {norma: 'Caso o (a) aluno (a) desista do preparatório não será feito nenhum tipo de devolução ou reembolso quanto aos valores referentes ao material didático adquirido.'},
//   {norma: 'O (A) aluno (a) fica comprometido a informar sua colocação e aprovação nos exames vestibulares e ENEM à coordenação pedagógica do preparatório que tem a incumbência e obrigação de dar publicidade aos resultados alcançados, dado que é um projeto de iniciativa social custeado e mantido pela administração pública do município.'},
//   {norma: 'Os casos omissos deste termo serão submetidos à avaliação do Conselho de Professores e Direção do preparatório que tem a prerrogativa e a autonomia de agir visando ao bem comum e à ética.'},
// ];
