import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IProductoInterface } from 'src/app/core/models/IProducto.interface';

@Injectable({
  providedIn: 'root'
})
export class MochilaEmergenciaService {

  constructor(private firestore:AngularFirestore) { }

  getUsuarios() {
    return this.firestore.collection('articulos_mochila').get();
  }

  createPost(producto:IProductoInterface) {
    return this.firestore.collection('articulos_mochila').add(producto);
  }
}
