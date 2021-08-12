import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetDataService } from '../service/data/asset-data.service';
import { MailService } from '../service/mail.service';
export class Email{
  constructor(
  public email:string){}
}
export class asset{
  constructor(
    public id:number,
    public rfidCode:string,
    public name:string,
    public status: boolean,
    public arrivalDate:Date){
  
    }}

@Component({
  selector: 'app-asset-list-verifier',
  templateUrl: './asset-list-verifier.component.html',
  styleUrls: ['./asset-list-verifier.component.css']
})
export class AssetListVerifierComponent implements OnInit {

  public show_dialog : boolean = false;
  public button_name : any = 'Send Email';
Email:Email
  assets: asset[]

  constructor(private assetService:AssetDataService,private router:Router,private mailService:MailService) { }

  ngOnInit() {
    this.refreshAssets();
    this.Email=new Email("");
     
  }

  refreshAssets(){
    this.assetService.retrieveAllAssets('Gunjan').subscribe(
      response =>{
        console.log(response);
        this.assets=response;
      })
     
    }
    toggle() {
      this.show_dialog = !this.show_dialog;
  
      // CHANGE THE TEXT OF THE BUTTON.
      if(this.show_dialog) 
        this.button_name = "Send Email";
      else
        this.button_name = "Enter Email id";
    }

    updateVerification(id) {
      console.log(`update ${id}`)
      this.router.navigate(['verify',id])
    }
    sendEmail(){
      this.mailService.sendEmail(this.Email).subscribe(
        response =>{
          console.log(response);
          this.Email=response;
          this.refreshAssets();
        }
      )
      
      }
    
    }

