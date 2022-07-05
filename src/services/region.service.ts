import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Region } from 'src/app/model/region';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url:string =  environment.apikey+"Region/";

  constructor(private httpClient:HttpClient  ) { }
  
  getRegion():Observable<Region[]> {
    return this.httpClient.get<Region[]>(this.url)
  }

  addRegion(region:Region):Observable<any> {
    return this.httpClient.post(this.url,region)
  }

  deleteRegion(id:any):Observable<any>{
    return this.httpClient.delete(this.url+id)
  }

  getRegionById(id:any):Observable<any>{
    return this.httpClient.get(this.url+id);
  }

  updateRegion(region:Region):Observable<any>{
    return this.httpClient.put(this.url,region);
  }
}
