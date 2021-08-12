import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginHandlingService } from '../service/login-handling.service';
import { user } from '../login/login.component';
import { URLSearchParams } from 'url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:user
id:number
  constructor(private router:Router,private loginHandlingService:LoginHandlingService) { }
  ngOnInit() {
  

    this.user=new user(this.id," "," "," "," ");
  }

 
  handleSignup(){

    if(this.id === -1) {
      this.loginHandlingService.signUp(this.user)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['login'])
            }
          )

    }
    else{
    this.loginHandlingService.signUp(this.user).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['login']);
      }
    )}
   
  }
}
