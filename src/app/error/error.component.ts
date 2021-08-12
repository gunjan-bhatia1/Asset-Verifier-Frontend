import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage=' Contact Support at gunjan.bhatia2609@gmail.com' 
  constructor() { }

  ngOnInit() {
  }

}
