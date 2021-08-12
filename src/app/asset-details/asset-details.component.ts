import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { assetDetailing } from '../asset-details-list/asset-details-list.component';
import { AssetDataService } from '../service/data/asset-data.service';
import { asset } from '../asset-list/asset-list.component';



@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  id:number
asset:asset

  constructor(private route: ActivatedRoute,
    private assetService: AssetDataService,  private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.asset=new asset(this.id," "," ",false,new Date()," "," "," "," "," ",new Date()," "," "," "," "," ",new Date()," "," "," ",false,false," ",false,false);
    
    if(this.id!=-1) {
      this.assetService.retrieveAsset('Gunjan', this.id)
          .subscribe (
            data => this.asset = data
          )
    }
   
  }
  reportLocation(id) {
    
    this.router.navigate(['map',id])
  }

  // saveAssetDetails(){
  //   //if(this.id === -1) {
  //     // this.assetDetailService.createAssetDetails('Gunjan', this.asseting)
  //     //     .subscribe (
  //     //       data => {
  //     //         console.log(data)
  //     //         this.router.navigate(['assets'])
  //     //       }
  //     //     )

  //  // }
  //   // else{
  //   this.assetService.updateAsset('Gunjan',this.id,this.asset).subscribe(
  //     data=>{
  //       console.log(data)
  //       this.router.navigate(['assets']);
    //   }
    // )}
    Back()
  {
   
      this.router.navigate(['assets'])
    
  }
  
  }


