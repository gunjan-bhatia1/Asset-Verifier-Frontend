import { Component, OnInit } from '@angular/core';
import { AssetDataService } from '../service/data/asset-data.service';

import { FormBuilder } from '@angular/forms';
import { asset } from 'src/app/asset-list/asset-list.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.component.html',
  styleUrls: ['./verifier.component.css']
})

export class VerifierComponent implements OnInit {
  id:number
  asset: asset
assets:asset[]
  constructor(
    private assetService: AssetDataService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.asset=new asset(this.id," "," ",false,new Date()," "," "," "," "," ",new Date()," "," "," "," "," ",new Date()," "," "," ",false,false," ",false,false);
    if(this.id!=-1){
    this.assetService.retrieveAsset('Gunjan', this.id)
        .subscribe (
          data => {
            return this.asset = data;
          }
        )}

       
      
  }

  updateAsset(id) {
    console.log(`update ${id}`)
    this.router.navigate(['verify',id])
  }

  reportLocation(id) {
    
    this.router.navigate(['map',id])
  }
  
  saveAsset(){
    if(this.id === -1) {
      this.assetService.createAsset('Gunjan', this.asset)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['assetVerifier'])
            }
          )

    }
    else{
    this.assetService.updateAsset('Gunjan',this.id,this.asset).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['assetVerifier']);
      }
    )}
  }
  
}
