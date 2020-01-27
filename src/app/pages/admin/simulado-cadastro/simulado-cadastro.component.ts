import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SimuladoAPIService } from "./../../../services/simulado-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-simulado-cadastro",
  templateUrl: "./simulado-cadastro.component.html",
  styleUrls: ["./simulado-cadastro.component.css"]
})
export class SimuladoCadastroComponent implements OnInit {
  listagem: any;
  materias = [
    "Selecione",
    "Física",
    "Biologia",
    "Matemática",
    "História",
    "Química",
    "Geografia",
    "Gramática",
    "Sociologia",
    "Filosofia",
    "Artes",
    "Inglês"
  ];

  constructor(
    public fb: FormBuilder,
    private service: SimuladoAPIService,
    private router: Router
  ) {}

  formSimuladoCadastro = this.fb.group({
    linkImg: [""],
    materia: [""],
    enunciado: [""],
    resp_a: [""],
    resp_b: [""],
    resp_c: [""],
    resp_d: [""],
    resp_e: ["Nenhuma das alternativas"],
    correta: [""]
  });

  onSubmit() {
    let form = this.formSimuladoCadastro.value;
    let feedbackError = "";

    if (form.enunciado === "") {
      feedbackError += "Campo enunciado não foi preenchido! \n";
    }
    if (form.resp_a === "") {
      feedbackError += "Campo resp A não foi preenchido! \n";
    }
    if (form.resp_b === "") {
      feedbackError += "Campo resp B não foi preenchido! \n";
    }
    if (form.resp_c === "") {
      feedbackError += "Campo resp C não foi preenchido! \n";
    }
    if (form.resp_d === "") {
      feedbackError += "Campo resp D não foi preenchido! \n";
    }
    if (form.resp_e === "") {
      feedbackError += "Campo resp E não foi preenchido! \n";
    }
    if (form.correta === "") {
      feedbackError += "Campo Correta não foi preenchido! \n";
    }
    if (form.materia === "" || form.materia === "Selecione") {
      feedbackError += "Campo Matéria não foi preenchido! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      // ENVIAR A API NOVA PERGUNTA DO SIMULADO
      this.service.postCadastraSimulado({
        pergunta: this.listagem.dados[0].qtdPerguntas + 1,
        materia: form.materia,
        enunciado: form.enunciado,
        resp_a: form.resp_a,
        resp_b: form.resp_b,
        resp_c: form.resp_c,
        resp_d: form.resp_d,
        resp_e: form.resp_e,
        correta: form.correta,
        img: form.linkImg
      });
      window.scrollTo(0, 0);
      window.location.reload();
    }
  }

  ngOnInit() {
    if (window.localStorage.getItem("nivel") !== "1") {
      this.router.navigate(["/inicio"]);
    }
    this.getCadastraSimulado();
  }

  getCadastraSimulado() {
    this.service.getCadastraSimulado().subscribe(dados => {
      this.listagem = dados;
    });
  }
}
