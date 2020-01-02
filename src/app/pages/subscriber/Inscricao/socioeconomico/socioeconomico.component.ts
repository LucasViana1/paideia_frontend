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
    teste: [""]
  });

  onSubmit() {
    let form = this.formSocio.value;
    alert(JSON.stringify(form));
  }

  ngOnInit() {}
}
