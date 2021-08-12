import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AssetDataService } from '../service/data/asset-data.service';
import { asset } from 'src/app/asset-list/asset-list.component';
// export class assetDetailing{
//   constructor(
//     public id:number,
//     public rfidCode:string,
//     public name:string,
//     public status: boolean,
//     public arrivalDate:Date,
//      public companyCode:string,
//     public description: string,
//     public warrantyNumber:string,
//     public quantity : string,
//     public costCenter : string,
//     public capitalizationDate:Date,
//     public image :string,
//     public location : string,
//     public financialData:string,
//     public acquisationValue:string,
//     public netValue :string,
//     public verificationDate:Date,
//     public presentImage:string,
//     public presentLocation:string,
//     public presentValue:string,
//     public itemSold :boolean,
//     public itemTransferred:boolean,
//     public comments:string,
//     public found:boolean,
//     public notFound:boolean

//     ) { 
 
//     }
//   }

@Component({
  selector: 'app-asset-details-list',
  templateUrl: './asset-details-list.component.html',
  styleUrls: ['./asset-details-list.component.css']
})
export class AssetDetailsListComponent implements OnInit {

  id:number
  asset:asset
  assets:asset[]
  message: string;
  constructor(
private assetService:AssetDataService,private router : Router
  ,private route:ActivatedRoute 
  
  ) { }

  ngOnInit() {
    this.refreshAssets();
    this.id = this.route.snapshot.params['id'];
    
    this.asset=new asset(this.id," "," ",false,new Date()," "," "," "," "," ",new Date()," "," "," "," "," ",new Date()," "," "," ",false,false," ",false,false);
    
    if(this.id!=-1) {
      this.assetService.retrieveAsset('Gunjan', this.id)
          .subscribe (
            data => this.asset = data
          )
    }


  }

  showAsset(id){
    this.assetService.retrieveAsset('Gunjan',id).subscribe(
      response =>{
        console.log(response);
        this.asset=response;
      })
    }

  refreshAssets(){
    this.assetService.retrieveAllAssets('Gunjan').subscribe(
      response =>{
        console.log(response);
        this.assets=response;
      })
    }
  
    deleteAsset(id) {
      console.log(`delete todo ${id}` )
      this.assetService.deleteAsset('Gunjan', id).subscribe (
        response => {
          console.log(response);
          this.message = `Delete of Asset ${id} Successful!`;
          this.refreshAssets();
        }
      )
    }
  Back()
  {
   
      this.router.navigate(['assets'])
    
  }
  
    updateAssetDetails(id) {
      console.log(`update ${id}`)
      this.router.navigate(['asset',id])
    }
    addAssetDetails() {
      this.router.navigate(['asset',-1])
    }
  
    
  
   
  
}
