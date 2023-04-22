import { Component, OnInit } from '@angular/core';
import { IProductoInterface } from 'src/app/core/models/IProducto.interface';
import { MochilaEmergenciaService } from 'src/app/shared/services/mochila-emergencia.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.page.html',
  styleUrls: ['./view-products.page.scss'],
})
export class ViewProductsPage implements OnInit {

  productos: IProductoInterface[] = [
    {
      id: 1,
      nombre: 'Paracetamol',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 2,
      nombre: 'Ibuprofeno',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 3,
      nombre: 'Aspirina',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 4,
      nombre: 'Dipirona',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 5,
      nombre: 'Cetirizina',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 6,
      nombre: 'Amoxicilina',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 7,
      nombre: 'Acetaminofen',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 8,
      nombre: 'Dipirona',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 9,
      nombre: 'Cetirizina',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 10,
      nombre: 'Atun Enlatado',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 11,
      nombre: 'Coca Cola',
      fechaVencimiento: new Date('2020-01-01')
    },
    {
      id: 12,
      nombre: 'Pepsi',
      fechaVencimiento: new Date('2020-01-01')
    }
  ]

  articulosMochila: any[] = [];

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private mochilaEmergencia:MochilaEmergenciaService) { }

  ngOnInit() {
    this.mochilaEmergencia.getUsuarios().subscribe(data => {
      this.articulosMochila = data.docs.map(doc => doc.data());
    });
  }

}