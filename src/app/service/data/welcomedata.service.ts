import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor( 
   private http: HttpClient
  ) { }
  executeTestSerivice(){
    let BasicAuthStr= this.BasicHttpHeaded();
    let header = new HttpHeaders({
      Authorization: BasicAuthStr
    })
    return this.http.get("http://localhost:8080/welcomedata/user",{headers: header});

  }

  BasicHttpHeaded(){
    let username='utkarsh'
    let password='utkarsh123456'
    let BasicAuthUserString= 'Basic ' + window.btoa(username+ ':'+ password);
    return BasicAuthUserString;
  }
}
