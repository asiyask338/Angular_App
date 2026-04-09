import { Routes, CanActivate } from '@angular/router';
import { Home } from './pages/core/home/home';
import { About } from './pages/core/about/about';
import { Contact } from './pages/core/contact/contact';
import { Blogs } from './pages/core/blogs/blogs';
import { NotFound } from './pages/core/not-found/not-found';
import { Login } from './pages/auth/login/login';
import { Signup } from './pages/auth/signup/signup';
import { Employees } from './pages/employee/employees/employees';
import { EmployeeDetail } from './pages/employee/employee-detail/employee-detail';
import { AddEmployee } from './pages/employee/add-employee/add-employee';
import { EditEmployee } from './pages/employee/edit-employee/edit-employee';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
 {path:'', redirectTo:'login', pathMatch:'full'},
 {path:'login', component:Login},
 {path:'signup', component:Signup},
 {path:'', 
  canActivate:[authGuard], 
  children:[ 
        {path:'dashboard', component:Home},
        {path:'about', component:About},
        {path:'contact', component:Contact},
        {path:'blogs', component:Blogs},
        {path:'employee', component:Employees, 
            children:[
                    {path:'details', component:EmployeeDetail},
                    {path:'add', component:AddEmployee},
                    {path:'edit', component:EditEmployee}]
                
        }]},
{path:'**', component:NotFound},//always at the last 

];
