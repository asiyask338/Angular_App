import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  empUrl="http://localhost:3000/employees"

  constructor(private http:HttpClient){}

  getEmployees()
  {
    return this.http.get(this.empUrl);
  }

  getEmployeeById(id:any)
  {
    return this.http.get(`${this.empUrl}/{id}`)
  }

  createEmployee(data :any)
  {
    return this.http.post(this.empUrl, data)
  }

  updateEmployee(data:any, id:any)
  {
    return this.http.put(`${this.empUrl}/{id}`, data)
  }

  deleteEmployee(id:any)
  {
    return this.http.delete(`${this.empUrl}/{id}`)
  }
}
