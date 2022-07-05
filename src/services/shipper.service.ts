import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Shipper } from 'src/app/model/shipper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  url:string = environment.apikey+"Shipper/"
  constructor(private http:HttpClient) { }

  getShipper(){
    return this.http.get(this.url)
  } 

  addShipper(shipper:Shipper):Observable<any>{
    return this.http.post(this.url,shipper);
  }

  deleteShipper(id:any):Observable<any>{
    return this.http.post(this.url,id);
  }

  getById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateShipper(shipper:Shipper):Observable<any>{
    return this.http.put(this.url,shipper);
  }
}
