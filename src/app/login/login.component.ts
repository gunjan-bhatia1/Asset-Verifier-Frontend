import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { LoginHandlingService } from '../service/login-handling.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { User } from './User';


export class user{
 
  constructor(
   
public id:number,
public email:string,
public password:string,
public userName:string,
public userType:string

    ){
  
    }}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  id:number
  usertype='Admin'
  username ='Gunjan'
  password=''
  email='gunjan.bhatia2609@gmail.com'
  errorMessage='Invalid Credentials'
  invalidLogin=false
  errors: any;
 
  //Admin=true
  constructor(private router:Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService,private loginHandlingService: LoginHandlingService) { }

  ngOnInit() {
    //this.user=new user(this.id," "," "," "," ");
  }

  
  handleLogin(){
  
    this.loginHandlingService.login(this.user)
    .subscribe (
      (result) => {
       console.log(result);
       //this.user=result;
      
       if(result)
       { sessionStorage.setItem('user',this.user.email);
         console.log("router");
         console.log(this.user);
         this.router.navigate(['welcome',this.user.userType]);
       }
      },
      error =>  {
          console.log(error);
          this.errors = error
      }
     
  )
    } 
  
  handleSignup(){
    this.router.navigate(['register'])
  }
 
}

  



  // handleJWTAuthLogin() {
    
  //   //this return observable back and we should subscribe it
  //       this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)).subscribe(
  //         //define successful scenario and failure when data come back proper it is success
  //         data =>{
  //           console.log(data)
  //           this.invalidLogin = false
  //           this.router.navigate(['welcome',this.username])
  //         },
  //         error =>{
  //             console.log(error)
  //             this.invalidLogin=true
  //         }
  //       )
        
  //     }

//   authenticate(username,password){
//     // console.log('before'+this.isUserLoggedIn());
//      if(username==="Gunjan" && password === 'dummy') {
//      sessionStorage.setItem('authenticaterUser',username);
//      //console.log('after'+this.isUserLoggedIn());
//        return true;
//      }
//      return false;
//    }
 
//  //based upon whether user is logged in or not we will make links visible 
 
//    isUserLoggedIn(){
//  let user=sessionStorage.getItem('authenticaterUser')
//  return !(user === null)
 
//  //user is logged in
//  }
 
//   logout(){
//    sessionStorage.removeItem('authenticaterUser')
//  }