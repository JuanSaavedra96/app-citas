import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  private SERVER = API_ENDPOINT;
  //private newLogin = this.SERVER + '/api/Items/login';
  private newLogin = this.SERVER + '/erp/cita/login';
  constructor(public http: HttpClient) { }

  newLoginWithDni(documentNumber: string){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    //let headers = new HttpHeaders({"Authorization": authorization.authorization});
    //const app = "ebooking"
    //let params = {documentNumber};
    let params = {usuario:documentNumber};
     return this.http.post(this.newLogin, params).pipe(
       map(resp => {
         return resp
       }), err => {
        return err
    })
  }
}
