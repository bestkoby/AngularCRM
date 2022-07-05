import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Supplier } from 'src/app/model/supplier';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url:string = environment.apikey+"Supplier/"
  constructor(private http:HttpClient) { }

  getSupplier(){
    return this.http.get(this.url)
  } 

  addSupplier(supplier:Supplier):Observable<any>{
    return this.http.post(this.url,supplier);
  }

  deleteSupplier(id:any):Observable<any>{
    return this.http.post(this.url,id);
  }

  getById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateSupplier(supplier:Supplier):Observable<any>{
    return this.http.put(this.url,supplier);
  }
}
