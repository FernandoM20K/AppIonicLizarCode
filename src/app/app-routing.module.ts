import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'geolocalizacion',
    loadChildren: () => import('./pages/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'form-producto',
    loadChildren: () => import('./pages/form-producto/form-producto.module').then( m => m.FormProductoPageModule)
  },
  {
    path: 'centros-ayuda',
    loadChildren: () => import('./pages/centros-ayuda/centros-ayuda.module').then( m => m.CentrosAyudaPageModule)
  },
  {
    path: 'view-products',
    loadChildren: () => import('./pages/view-products/view-products.module').then( m => m.ViewProductsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
