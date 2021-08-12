import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { asset } from 'src/app/asset-list/asset-list.component';


@Injectable({
  providedIn: 'root'
})
export class AssetDataService {

  constructor(private http:HttpClient
    
    ) { }

    retrieveAllAssets(username) {
      return this.http.get<asset[]>(`http://localhost:8080/users/${username}/assets`);
      //console.log("Execute Hello World Bean Service")
    }
    
    deleteAsset(username, id){
      return this.http.delete(`http://localhost:8080/users/${username}/assets/${id}`);
    }

    retrieveAsset(username, id){
      return this.http.get<asset>(`http://localhost:8080/users/${username}/assets/${id}`);
    }

    updateAsset(username, id,asset){
      return this.http.put<asset>(`http://localhost:8080/users/${username}/assets/${id}`,asset);
    }
    createAsset(username,asset){
      return this.http.post(`http://localhost:8080/users/${username}/assets`,asset);
    }
  
  
  
}
