import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosAyudaPageRoutingModule } from './centros-ayuda-routing.module';

import { CentrosAyudaPage } from './centros-ayuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosAyudaPageRoutingModule
  ],
  declarations: [CentrosAyudaPage]
})
export class CentrosAyudaPageModule {}
