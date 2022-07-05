import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = environment.apikey+"Product/"
  constructor(private http:HttpClient) { }
  
  getProduct(){
    return this.http.get(this.url)
  } 

  addProduct(employee:Product):Observable<any>{
    return this.http.post(this.url,employee);
  }

  deleteProduct(id:any):Observable<any>{
    return this.http.post(this.url,id);
  }

  getById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateProduct(product:Product):Observable<any>{
    return this.http.put(this.url,product);
  }
}
