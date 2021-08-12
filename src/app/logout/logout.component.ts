import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { User } from '../login/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user:User=new User();
  constructor( private hardcodedAuthenticationService: HardcodedAuthenticationService,private router:Router
    ) { }

  ngOnInit() {
   // this..logout();
   sessionStorage.removeItem('user');
  }
  handleLogout(){
  
    // this.loginHandlingService.logout(this.user)
    // .subscribe (
    //   (result) => {
    //    console.log(result);
       //this.user=result;
       
       
      sessionStorage.setItem('user',this.user.email);
  //      if(this.user)
  //      {
  //        console.log("router");
  //        console.log(this.user);
  //        this.router.navigate();
  //      }
  //     },
  //     error => {
  //         console.log(error);
  //         this.errors = error
  //     }
     
  // )
}
}
