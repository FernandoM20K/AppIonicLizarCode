import { Component, OnInit } from '@angular/core';
import { IRecomendacionesInterface } from 'src/app/core/models/IRecomendaciones.interface';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recomendacionesEmergencia: IRecomendacionesInterface[] = [
    {
        titulo: "Botiquín de primeros auxilios",
        subtitulo: "Mantén la salud en caso de emergencia",
        informacion: "Incluye vendas, gasas, alcohol y otros suministros médicos esenciales.",
        img: 'https://cdn-cinfasalud.cinfa.com/wp-content/uploads/2019/03/CinfaSalud-botiquin-hogar-600.jpg'
    },
    {
        titulo: "Linterna",
        subtitulo: "Ilumina el camino en situaciones de oscuridad",
        informacion: "Asegúrate de que tenga baterías o esté cargada.",
        img: 'https://top10productos.com/wp-content/uploads/2021/05/51Hzu0PswsS._SL500_.jpg'
    },
    {
        titulo: "Radio portátil",
        subtitulo: "Mantente informado en situaciones de emergencia",
        informacion: "Elige uno que funcione con baterías y tenga una antena.",
        img: 'https://hiraoka.com.pe/media/catalog/product/cache/a357cb11a228eb6f7f15c0ee1ff203af/1/1/116423.jpg'
    },
    {
        titulo: "Manta térmica",
        subtitulo: "Mantiene el calor en situaciones de frío",
        informacion: "Es una lámina de material térmico que refleja el calor corporal.",
        img: 'https://i.linio.com/p/e72c5442d0a3d24f939014ee56763969-product.jpg'
    },
    {
        titulo: "Agua embotellada",
        subtitulo: "Mantén hidratado en caso de emergencia",
        informacion: "Guarda al menos 1 galón por persona por día.",
        img: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/10/05/5f7b260277fed.r_d.1244-497-0.jpeg'
    },
  ]

  constructor() { }

  ngOnInit() {
    
  }

  obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Tu ubicación actual es: ${latitude}, ${longitude}`);
      });
    } else {
      console.log("Geolocation no es soportado por este navegador.");
    }
  }

  

}
