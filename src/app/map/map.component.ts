/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';

// import { MapsService } from '../service/maps.service';

import { ViewChild } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { asset } from 'src/app/asset-list/asset-list.component';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

//   lat:string ='';
// lng:string='';

// location: Object;
// constructor(private mapsService:MapsService
//   ){


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;
  ngAfterViewInit(): void {
   // Load google maps script after view init
   const DSLScript = document.createElement('script');
  //  DSLScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcITnEtELzhAKr5IjD2esG0Rx82-fvZc0'; // replace by your API key
  DSLScript.type = 'text/javascript';
   document.body.appendChild(DSLScript);
   document.body.removeChild(DSLScript);
 }
  ngOnInit() {
   var mapProp = {
     center: new google.maps.LatLng(28.3671956,77.31539520),
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
 }

 findMe() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition((position) => {
       this.showPosition(position);
     });
   } else {
     alert("Geolocation is not supported by this browser.");
   }
 }

 showPosition(position) {
   this.currentLat = position.coords.latitude;
   this.currentLong = position.coords.longitude;

   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   this.map.panTo(location);

   if (!this.marker) {
     this.marker = new google.maps.Marker({
       position: location,
       map: this.map,
       title: 'Got you!'
     });
   }
   else {
     this.marker.setPosition(location);
   }
 }

 trackMe() {
   if (navigator.geolocation) {
     this.isTracking = true;
     navigator.geolocation.watchPosition((position) => {
       this.showTrackingPosition(position);
     });
   } else {
     alert("Geolocation is not supported by this browser.");
   }
 }

 showTrackingPosition(position) {
   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
   this.currentLat = position.coords.latitude;
   this.currentLong = position.coords.longitude;

   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   this.map.panTo(location);

   if (!this.marker) {
     this.marker = new google.maps.Marker({
       position: location,
       map: this.map,
       title: 'Got you!'
     });
   }
   else {
     this.marker.setPosition(location);
   }
 }
}

// ngOnInit(){
//   this.mapsService.getLocation().subscribe(data =>
//     {
//       console.log(data);
//       this.lat=data.latitude;
//       this.lng=data.longitude;
//     }
//     )
// }

