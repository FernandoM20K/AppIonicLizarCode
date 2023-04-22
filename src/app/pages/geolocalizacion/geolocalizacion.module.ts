import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionPageRoutingModule } from './geolocalizacion-routing.module';

import { GeolocalizacionPage } from './geolocalizacion.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [GeolocalizacionPage]
})
export class GeolocalizacionPageModule {}
