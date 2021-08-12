import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Email } from '../asset-list-verifier/asset-list-verifier.component';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  
  sendEmail(Email){
    console.log("hi");
    return this.http.put<Email>(`http://localhost:8080/email/sendEmail`,Email);
  }
}
