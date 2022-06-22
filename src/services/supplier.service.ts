import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }

  getSupplier(){
    return this.http.get("https://localhost:7133/api/Supplier")
  }
}
