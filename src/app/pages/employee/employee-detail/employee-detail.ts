import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service';

@Component({
  selector: 'app-employee-detail',
  imports: [RouterOutlet],
templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
})
export class EmployeeDetail {

  constructor(private route:ActivatedRoute, private   service :EmployeeService){}
  

employee = signal<any>(null); 

ngOnInit() {
  this.route.paramMap.subscribe(params => {
  const id = params.get('id');

  if (id) {
    this.service.getEmployeeById(id).subscribe(res => {
      this.employee.set(res);
    });
  }
});
}
}
