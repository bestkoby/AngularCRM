import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient:HttpClient  ) { }
  
  getRegion(){
    return this.httpClient.get("https://localhost:7133/api/Region")
  }
}
