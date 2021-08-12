import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  userType='';
  email:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType= this.route.snapshot.params['userType'];
    this.email=sessionStorage.getItem('user');
    console.log(this.email);
  }

  getWelcomeMessage(){
    console.log("get welcome message");
  }

}
