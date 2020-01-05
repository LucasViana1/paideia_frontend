import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-arquivos",
  templateUrl: "./arquivos.component.html",
  styleUrls: ["./arquivos.component.css"]
})
// FORÇAR PREENCHIMENTO DE CAMPOS OBRIGATORIOS
export class ArquivosComponent implements OnInit {
  // constructor() {}
  constructor(public fb: FormBuilder) {}

  formArquivos = this.fb.group({
    rgCandidato: [""],
  });
  rgCandidatoo:any;
  onSubmit() {
    // this.rgCandidatoo = document.getElementById('rgCandidatoHidden')
    let form = this.formArquivos.value;
    console.log(form)
    console.log(this.rgCandidatoo)
    // console.log(JSON.stringify(form));
  }

  ngOnInit() {}
}

// opção para conversao de base 64
// base64textString = [];
//   onUploadChange(evt: any) {
//     const file = evt.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = this.handleReaderLoaded.bind(this);
//       reader.readAsBinaryString(file);
//     }
//   }
//   handleReaderLoaded(e) {
//     this.base64textString.push(
//       "data:image/png;base64," + btoa(e.target.result)
//     );
//   }
//   // ver base64, para testes
//   base64() {
//     console.log(this.base64textString);
//   }
