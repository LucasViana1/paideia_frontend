import { Component, OnInit } from "@angular/core";
// import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-arquivos",
  templateUrl: "./arquivos.component.html",
  styleUrls: ["./arquivos.component.css"]
})
export class ArquivosComponent implements OnInit {

  // public rgBase64: string;
  // cpfBase64: string;
  // historicoBase64: string;
  // cidadaoBase64: string;
  // enderecoBase64: string;
  // bolsaBase64: string;

  constructor() {}
  // constructor(public fb: FormBuilder) {}

  // formArquivos = this.fb.group({
  //   nome_completo: [""],
  //   data: [""],
  //   estado: [""],
  //   cidade: [""],
  //   tel1: [""],
  //   tel2: [""],
  //   cpf: [""],
  //   rg: [""],
  //   cidadao: [""]
  // });

  onSubmit() {
    // let form = this.formArquivos.value;
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