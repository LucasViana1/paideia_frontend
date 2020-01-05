import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {UsersAPIService} from '../../../../services/users-api.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public fb: FormBuilder, private service: UsersAPIService) {}

  formLogin = this.fb.group({
    email: [""],
    senha: [""]
  });

  onSubmit() {
    const form = this.formLogin.value;
    let feedbackError = '';
    //validação
    if(form.email === ''){
      feedbackError += 'Campo e-mail não foi preenchido!  \n';
    }
    if(form.senha === ''){
      feedbackError += 'Campo senha não foi preenchido!  \n';
    }
    if(feedbackError !== ''){
      alert(feedbackError);
    } else{
      this.service.loginUser(form);
    }
  }

  ngOnInit() {}
}
