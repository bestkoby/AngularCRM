import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string =  environment.apikey+"Category/";
  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get(this.url)
  } 

  addCategory(category:Category):Observable<any>{
    return this.http.post(this.url,category);
  }

  deleteCategory(id:any):Observable<any>{
    return this.http.post(this.url,id);
  }

  getById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateCategory(category:Category):Observable<any>{
    return this.http.put(this.url,category);
  }
}
