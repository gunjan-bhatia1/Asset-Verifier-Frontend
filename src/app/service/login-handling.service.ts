import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../login/login.component';
import { User } from '../login/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginHandlingService {
  id:number
user:user

user1:user
  constructor(private http:HttpClient
    ) { 
     
    }
    
  signUp(user) {
   console.log("account created");
    return this.http.post(`http://localhost:8080/user/signUp`,user);
    //console.log("Execute Hello World Bean Service")
  }
  
 public login(user:User){
   console.log("Login api called");
   console.log(user);
  return this.http.post(`http://localhost:8080/user/login`,user);
  
  }


}
  // public userDetails(email:string):Observable<Asset[]>{
  //    console.log("userDetails api called");
  //    return this.http.post<Asset[]>(`http://localhost:8080/asset/details`,email)
  // }

  // if(username==='Gunjan'&&password==='dummy'&&usertype==='Admin'){
  //   sessionStorage.setItem('authenticaterUser',username);
  //    return true;}
  // else if(username==='Gunjan'&&password==='dummy'&&usertype==='Verifier')
  //  {
  //    sessionStorage.setItem('authenticaterUser',username);
  //   return true;
  //  }
  

