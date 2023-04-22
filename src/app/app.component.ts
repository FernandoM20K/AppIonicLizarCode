import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IMenuInterface } from './core/models/IMenu.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  // CM: Modificar los links
  menu: IMenuInterface[] = [
    {
      id: 1,
      name: 'Mochila de Emergencia',
      icon: 'bag-outline',
      link: "/view-products"
    },
    {
      id: 2,
      name: 'Recomendaciones',
      icon: 'information-circle-outline',
      link: "/recomendaciones"
    },
    {
      id: 3,
      name: 'Geolocalización',
      icon: 'navigate-circle-outline',
      link: "/geolocalizacion"
    },
    {
      id: 4,
      name: 'Configuración',
      icon: 'settings-outline',
      link: "/configuracion"
    },
    {
      id: 5,
      name: 'Hospitales',
      icon: 'medkit-outline',
      link: "/hospitales"
    },
    {
      id: 6,
      name: 'Centros de Ayuda',
      icon: 'help-circle-outline',
      link: "/centros-ayuda"
    }
  ];
  
  constructor() {}

}
