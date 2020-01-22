import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { SimuladoAPIService } from "../../../../services/simulado-api.service";

@Component({
  selector: "app-simulado",
  templateUrl: "./simulado.component.html",
  styleUrls: ["./simulado.component.css"]
})
export class SimuladoComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private service: SimuladoAPIService,
    private router: Router
  ) {}

  formSimulado = this.fb.group({
    nome: [""],
    sobrenome: [""],
    curso_desejado: [""]
  });

  onSubmit() {
    let form = this.formSimulado.value;
    let feedbackError = "";

    if (form.nome_completo === "") {
      feedbackError += "Campo nome não foi preenchido! \n";
    }
    if (feedbackError !== "") {
      alert(feedbackError);
    } else {
      console.log(form);
      // this.service.inserePessoal(form);
      // this.router.navigate(['/inscricao/arquivos'])
    }
  }

  ngOnInit() {}
}
