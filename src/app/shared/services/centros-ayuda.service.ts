import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICentroAyudaInterface } from 'src/app/core/models/ICentroAyuda.interface';

@Injectable({
  providedIn: 'root'
})
export class CentrosAyudaService {

  constructor(private http:HttpClient) { }

}
