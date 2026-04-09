import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 constructor(private router:Router){}

  isLoggedIn = localStorage.getItem('loggedin')

  email=new FormControl('')
  password=new FormControl('')


  handleLogin()
  {
    // console.log(this.email.value);
    // console.log(this.password.value)

    if(this.email.value=="shaik@gmail.com" && this.password.value=='123')
    {
      localStorage.setItem('loggedin', 'true');
      this.router.navigate(['/dashboard'])
    }
  }

  handleLogout()
  {
    localStorage.removeItem('loggedin')
    this.router.navigate(['/login'])
  }
}
