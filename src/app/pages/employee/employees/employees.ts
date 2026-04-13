import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive  } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-employees',
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
}