import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http:HttpClient) { }

  getShipper(){
    return this.http.get("https://localhost:7133/api/Shipper")
  }
}
