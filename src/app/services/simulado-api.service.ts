import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"; // dev

@Injectable({
  providedIn: "root"
})
export class SimuladoAPIService {
  constructor(private http: HttpClient, private router: Router) {}

  getCadastraSimulado() {
    // console.log("req a api de simulado");
    // console.log(
    //   this.http.get<any[]>(`${environment.urlBase}/cadastraSimulado`)
    // );
    return this.http.get<any[]>(`${environment.urlBase}/cadastraSimulado`);
  }
}
