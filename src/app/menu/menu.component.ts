import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//isUserLoggedIn: boolean=false;

usertype='Admin'
  constructor(private hardcodedAuthenticationService
    :HardcodedAuthenticationService,private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.usertype= this.route.snapshot.params['usertype'];
 //this.isUserLoggedIn=  this.hardcodedAuthenticationService.isUserLoggedIn();

  }

}
