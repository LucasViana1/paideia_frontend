import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersAPIService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/cadastraUser";

  cadastraUser(postData:any){
    this.http
      .post(this.url, postData)
      .toPromise()
      // .then(data => {
      //   console.log("ok");
      // });
  }
}
