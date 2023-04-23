import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICentroAyudaInterface } from 'src/app/core/models/ICentroAyuda.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CentrosAyudaService {

  constructor(private firestore:AngularFirestore) { }

  getCentrosAyuda() {
    return this.firestore.collection('centros_ayuda').get();
  }

}
