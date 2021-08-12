import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AssetDataService } from '../service/data/asset-data.service';
import { asset } from 'src/app/asset-list/asset-list.component';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  id:number
  asset:asset
  
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
          data => this.asset = data
        )}
  }


  saveAsset(){
    if(this.id === -1) {
      this.assetService.createAsset('Gunjan', this.asset)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['assets'])
            }
          )

    }
    else{
    this.assetService.updateAsset('Gunjan',this.id,this.asset).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['assets']);
      }
    )}
  }
}