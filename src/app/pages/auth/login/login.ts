import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 constructor(private router:Router, private http:HttpClient){}

 loginUrl:string="http://localhost:8088/api/v1/auth/login"

 
  isLoggedIn = localStorage.getItem('loggedin')

  email=new FormControl('')
  password=new FormControl('')

  errorMsg:string=''

  userLogin:any=''

  handleLogin()
  {
    // console.log(this.email.value);
    // console.log(this.password.value)

    this.userLogin = {
      email : this.email.value,
     password : this.password.value
    }

    // console.log(this.userLogin)

    this.http.post<any>(this.loginUrl, this.userLogin).subscribe(
      (response: any) => {
        // console.log(response);

        localStorage.setItem('loggedin', 'true');
        this.router.navigate(['/dashboard'])
      },
      (error: any) => {
        console.log("ERROR : " , error)

        this.errorMsg="Invalid email or password"
      }
    )
  }

  handleLogout()
  {
    localStorage.removeItem('loggedin')
      this.router.navigate(['/login'])
    
  }
}
