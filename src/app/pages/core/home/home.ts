import { Component, signal, WritableSignal } from '@angular/core';
import { EmployeeService } from '../../../services/employee-service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private service:EmployeeService, private route:Router){}

  ngOnInit()
  {
    this.getEmployees();
  }

  employees:any[]=[]
  recentEmployees:any[]=[]
  empCount:WritableSignal<number>=signal(0)

  getEmployees(){
  this.service.getEmployees().subscribe((employees:any) => {
    // console.log(employees);

    this.empCount.set(employees.length);

    this.employees = employees;

    // show only recent 3
    this.recentEmployees = employees.slice(-3).reverse();

    // console.log("RECENT EMPLOYEES:", this.recentEmployees);
  });
}
  

}
