import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 2,
      nombre: 'Ibuprofeno',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 3,
      nombre: 'Aspirina',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 4,
      nombre: 'Dipirona',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 5,
      nombre: 'Cetirizina',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 6,
      nombre: 'Amoxicilina',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 7,
      nombre: 'Acetaminofen',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 8,
      nombre: 'Dipirona',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 9,
      nombre: 'Cetirizina',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 10,
      nombre: 'Atun Enlatado',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 11,
      nombre: 'Coca Cola',
      fechaCaducidad: new Date('2020-01-01')
    },
    {
      id: 12,
      nombre: 'Pepsi',
      fechaCaducidad: new Date('2020-01-01')
    }
  ]

  articulosMochila: any[] | undefined;

  isModalOpen = false;

  productoAgregado: FormGroup = new FormGroup({});

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private mochilaEmergencia:MochilaEmergenciaService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getProductos();

    this.productoAgregado = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fechaCaducidad: ['', Validators.required],
      cantidad: ['', [Validators.required]]
    });
  }

  get nombre() {
    return this.productoAgregado.get('nombre');
  }

  get fechaCaducidad() {
    return this.productoAgregado.get('fechaCaducidad');
  }

  get cantidad() {
    return this.productoAgregado.get('cantidad');
  }

  addProducto() {
    this.mochilaEmergencia.createPost(this.productoAgregado.value).then(() => {
      console.log('Producto Agregado');
      console.log(this.productoAgregado.value);
      this.productoAgregado.reset();
      this.getProductos();
    });
  }

  getProductos() {
    this.mochilaEmergencia.getUsuarios().subscribe(
      {
        next: (data) => {
          this.articulosMochila = data.docs.map(doc => doc.data());
          console.log(this.articulosMochila)
          console.log('Funcion Realizada')
        },
        error: (error) => {
          console.log(error)
          console.log('Error');
        }
      }
    );
  }

}