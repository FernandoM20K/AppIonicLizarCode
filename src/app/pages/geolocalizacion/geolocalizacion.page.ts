import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  position = {
    longitude: 0,
    latitude: 0,
  }

  constructor() { }

  ngOnInit() {
    this.view();
  }

  viewUbicacion() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.position.latitude = position.coords.latitude;
      this.position.longitude = position.coords.longitude;
    });
  }

  view() {
    
  }

}
