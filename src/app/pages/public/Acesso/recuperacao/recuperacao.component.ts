import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UsersAPIService } from '../../../../services/users-api.service';

@Component({
  selector: "app-recuperacao",
  templateUrl: "./recuperacao.component.html",
  styleUrls: ["./recuperacao.component.css"]
})
export class RecuperacaoComponent implements OnInit {
  showMessage: boolean = false

  constructor(public fb: FormBuilder, private service: UsersAPIService) { }

  formRecupera = this.fb.group({
    rec_email: [""]
  });

  onSubmit() {
    let form = this.formRecupera.value;
    let feedbackError = '';

    if (form.rec_email === '') {
      feedbackError += 'Campo e-mail não foi preenchido!  \n';
    }
    if (feedbackError !== '') {
      alert(feedbackError);
    } else {
      this.service.recuperaUser(form);
      this.showMessage = true
    }
  }

  ngOnInit() { }
}
