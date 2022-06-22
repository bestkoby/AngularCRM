import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient ) { }

  getCustomer(){
    return this.http.get("https://localhost:7133/api/Customer")
  }
}
