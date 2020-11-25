import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UsersAPIService } from '../../../../services/users-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valida',
  templateUrl: './valida.component.html',
  styleUrls: ['./valida.component.css']
})
export class ValidaComponent implements OnInit {

  constructor(public fb: FormBuilder, private service: UsersAPIService, private router: Router) { }

  formValida = this.fb.group({
    codigo: [""],
  });

  onSubmit() {
    const form = this.formValida.value;
    let feedbackError = '';

    if (form.codigo === '') {
      feedbackError += 'Campo código não foi preenchido!  \n';
    }
    if (feedbackError !== '') {
      alert(feedbackError);
    } else {
      this.service.validaUser(form);
    }
  }

  ngOnInit() {
    if (window.localStorage.getItem('nivel') !== null) {
      this.router.navigate(['/inicio']);
    }
  }

}
