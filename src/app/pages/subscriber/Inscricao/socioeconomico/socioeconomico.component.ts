import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-socioeconomico",
  templateUrl: "./socioeconomico.component.html",
  styleUrls: ["./socioeconomico.component.css"]
})
export class SocioeconomicoComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  formSocio = this.fb.group({
    sexo: [""],
    idade: [""],
    mora_tempo: [""],
    local: [""],
    mora_pessoas_perentesco: [""], // talvez remover
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
    nenhuma_atividade: [""]
  });

  onSubmit() {
    let form = this.formSocio.value;
    alert(JSON.stringify(form));
  }

  ngOnInit() {}
}
