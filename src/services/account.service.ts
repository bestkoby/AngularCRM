import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url:string =  environment.apikey+"login/";

  constructor(private http:HttpClient) { }

  signup(singup:any ):Observable<any>{
    return this.http.post(this.url, singup)
  }
 

  login(loginmodel:any):Observable<any>{
    return this.http.post(this.url, loginmodel)
  }
}
