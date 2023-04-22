import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProductoPageRoutingModule } from './form-producto-routing.module';

import { FormProductoPage } from './form-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProductoPageRoutingModule
  ],
  declarations: [FormProductoPage]
})
export class FormProductoPageModule {}
