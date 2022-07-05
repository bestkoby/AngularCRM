import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = environment.apikey+"Customer/";
  constructor(private http:HttpClient ) { }

  getCustomer(){
    return this.http.get(this.url)
  } 

  addCustomer(customer:Customer):Observable<any>{
    return this.http.post(this.url,customer);
  }

  deleteCustomer(id:any):Observable<any>{
    return this.http.post(this.url,id);
  }

  getById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateCustomer(customer:Customer):Observable<any>{
    return this.http.put(this.url,customer);
  }
}
