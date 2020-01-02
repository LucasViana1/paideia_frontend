import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  formLogin = this.fb.group({
    email: [""],
    senha: [""]
  });

  onSubmit() {
    let form = this.formLogin.value;
    alert(JSON.stringify(form));
  }

  ngOnInit() {}
}
