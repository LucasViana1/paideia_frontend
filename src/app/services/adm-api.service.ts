import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // dev

@Injectable({
  providedIn: 'root'
})
export class AdmAPIService {

  constructor(private http: HttpClient, private router: Router) { }

  listaInscritos(){
    return this.http.get<any[]>(`${environment.urlBase}/inscritos`);
  }
  detalhesInscritos(id:any){
    return this.http.get<any[]>(`${environment.urlBase}/detalhes/${id}`);
  }

}
