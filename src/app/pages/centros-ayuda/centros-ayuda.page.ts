import { Component, OnInit } from '@angular/core';
import { ICentroAyudaInterface } from 'src/app/core/models/ICentroAyuda.interface';

@Component({
  selector: 'app-centros-ayuda',
  templateUrl: './centros-ayuda.page.html',
  styleUrls: ['./centros-ayuda.page.scss'],
})
export class CentrosAyudaPage implements OnInit {

  centroAyuda: ICentroAyudaInterface[] = [
    {
      id: 1,
      nombre: 'Hospital Regional de Ica',
      ubicacion: 'Av. San Martín 480, Ica 11000, Perú',
      telefono: '+51 56 235553',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Hospital Santa Maria del Socorro',
      ubicacion: 'Av. Grau 669, Ica 11001, Perú',
      telefono: '+51 56 225909',
      imagenes: [
        {
          id: 1,
          url: 'https://1.bp.blogspot.com/-zpQlwBAuKF8/YUZtuipYjwI/AAAAAAAAZGg/bDU3yt4F7hce7Od1iHngbVcnV0bJE4gPACNcBGAsYHQ/s2048/Pago%2Birregular%2Bpor%2Buniformes%2B-%2BIca.JPG'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Comisaría de Ica',
      ubicacion: 'Jirón Ica, Ica 11001, Perú',
      telefono: '+51 56 261201',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Comisaría de Parcona',
      ubicacion: 'Carretera Panamericana Sur Km. 301, Parcona 11011, Perú',
      telefono: '+51 56 586800',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Centro de Ayuda 1',
      ubicacion: 'Calle 1 # 1 - 1',
      telefono: '1234567',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Centro de Ayuda 1',
      ubicacion: 'Calle 1 # 1 - 1',
      telefono: '1234567',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Centro de Ayuda 1',
      ubicacion: 'Calle 1 # 1 - 1',
      telefono: '1234567',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
    {
      id: 1,
      nombre: 'Centro de Ayuda 1',
      ubicacion: 'Calle 1 # 1 - 1',
      telefono: '1234567',
      imagenes: [
        {
          id: 1,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        },
        {
          id: 2,
          url: 'https://www.ata.com.pe/admin/_uploads/imagenes/proy-14032019190323-fortalecimiento-de-la-capacidad-resolutiva-de-los-servicios-de-salud-del-hospital-regional-de-ica-ndash-diresa-ica.jpg'
        }
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
