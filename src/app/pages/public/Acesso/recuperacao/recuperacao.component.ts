import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-recuperacao",
  templateUrl: "./recuperacao.component.html",
  styleUrls: ["./recuperacao.component.css"]
})
export class RecuperacaoComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  formRecupera = this.fb.group({
    rec_email: [""]
  });

  onSubmit() {
    let form = this.formRecupera.value;
    alert(JSON.stringify(form));
  }

  ngOnInit() {}
}
