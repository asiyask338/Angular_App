import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  constructor(private router: Router, private service: EmployeeService, private cd: ChangeDetectorRef){}

   ngOnInit()
  {
    this.getEmployees();
  }

  employees:any[]=[]

  getEmployees(){
  this.service.getEmployees().subscribe((employees:any) => {
    this.employees = employees
    this.cd.detectChanges();
    // console.log(employees)
  });
}
}
