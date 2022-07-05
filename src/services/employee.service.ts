import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = environment.apikey+"Employee/"

  constructor(private http:HttpClient) { }

  getEmployee(){
    return this.http.get(this.url)
  }

  addEmployee(employee:Employee):Observable<any>{
    return this.http.post(this.url,employee);
  }

  deleteEmployee(id:any):Observable<any>{
    return this.http.post(this.url,id);
  }

  getEmployeeById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateEmployee(employee:Employee):Observable<any>{
    return this.http.put(this.url,employee);
  }
}
