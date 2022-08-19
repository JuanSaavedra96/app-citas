import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class userService {
  private SERVER = API_ENDPOINT;
  private newLogin = this.SERVER + '/users';

  //VAR PARA ALMACENAR DATA
  public dataSend;
  constructor(public http: HttpClient) { }

  newLoginWithDni(documentNumber: string,password:string){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    //let params = {documentNumber};
    let params = {'usuario':documentNumber,
                  'clave':password};
     return this.http.post(this.newLogin + '/login', params).pipe(
       map(resp => {
         return resp
       }), err => {
        return err
    })
  }
  //ENVIAR CORREO
  recoveryLogin(datos){
  let params = datos;  
    return this.http.post(this.newLogin + '/send-code-recovery', params,{responseType: 'text'}).pipe(
                    map(data => {
                      return data
                    })
    )
  }
  //REESTABLECER CONTRASEÑA
  loginRecovery(datos){
  let params = datos;  
    return this.http.post(this.newLogin + '/validate-recovery', params, {responseType: 'text'}).pipe(
                    map(data => {
                      return data
                    })
    )
  }
}
