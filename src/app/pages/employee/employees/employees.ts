import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-employees',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {}
