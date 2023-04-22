import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MochilaEmergenciaService {

  constructor(private firestore:AngularFirestore) { }

  getUsuarios() {
    return this.firestore.collection('articulos_mochila').get();
  }
}
