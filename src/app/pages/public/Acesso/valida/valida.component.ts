import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {UsersAPIService} from '../../../../services/users-api.service';

@Component({
  selector: 'app-valida',
  templateUrl: './valida.component.html',
  styleUrls: ['./valida.component.css']
})
export class ValidaComponent implements OnInit {

  constructor(public fb: FormBuilder, private service: UsersAPIService) { }

  formValida = this.fb.group({
    codigo: [""],
  });

  onSubmit() {
    const form = this.formValida.value;
    let feedbackError = '';
    //validação
    if(form.codigo === ''){
      feedbackError += 'Campo código não foi preenchido!  \n';
    }
    if(feedbackError !== ''){
      alert(feedbackError);
    } else{
      this.service.validaUser(form);
    }
  }

  ngOnInit() {
  }

}
