import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";


const urlApp : string ='{{URL_SERVICIOS}}/users';
const token : string = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCbHV1bGluayIsImlkIjoiMjQxNDUxNCIsImV4cCI6MTU1NTA1NjY0NX0.h9JdZgQqE7QVKkUMK4uUx7fYDWDdJ6peDBCBNM9dTsk'
@Injectable()
export class PhotoProvider {

  constructor(public http: HttpClient) {
    console.log('Photo`s service');
  }
  //se le pasa como header el Bearer token
  //se le pasa el archivo como base 64 llamado profile
  changePhoto(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('profile', file);
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': `Bearer ${{token}}`
      })
    };
    let url = urlApp+'/profile/photo';
    return this.http.put(urlApp, formData,  { observe: 'response' });

  }
  

}
