import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosAyudaPage } from './centros-ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosAyudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosAyudaPageRoutingModule {}
