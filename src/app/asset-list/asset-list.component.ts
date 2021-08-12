import { Component, OnInit } from '@angular/core';
import { AssetDataService } from '../service/data/asset-data.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { AssetDetailsService } from '../service/asset-details.service';


export class asset{
constructor(
  public id:number,
  public rfidCode:string,
  public name:string,
  public status: boolean,
  public arrivalDate:Date,
  public companyCode:string,
  public description: string,
  public warrantyNumber:string,
  public quantity : string,
  public costCenter : string,
  public capitalizationDate:Date,
  public image :string,
  public location : string,
  public financialData:string,
  public acquisationValue:string,
  public netValue :string,
  public verificationDate:Date,
  public presentImage:string,
  public presentValue:string,
  public presentLocaation:string,
  public itemSold :boolean,
  public itemTransferred:boolean,
  public comments:string,
  public found:boolean,
  public notFound:boolean
  ){

  }}
@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  id:number
  assets: asset[]
  message: string;
  //assets = [
  //   new asset(1, 44,'asset1', false, new Date()),
  //   new asset(2, 45,'asset2', false, new Date()),
  //   new asset(3,78, 'asset3', false, new Date())

  // ]


  // todo={
  //   id : 1,
  //   description:"useful"
  // }
  constructor(private assetService:AssetDataService, private router : Router,
   private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.refreshAssets();
     
    
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


  updateAsset(id) {
    console.log(`update ${id}`)
    this.router.navigate(['asset',id])
  }
  addAsset() {
    this.router.navigate(['asset',-1])
  }

  
viewAssetDetails(id)
{
  this.router.navigate(['assetDetailsList',id])
}
showVerifideData(id)
{
  this.router.navigate(['verifiedAssetDetails',id])
}
 

}
