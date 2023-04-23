import { Component, OnInit } from '@angular/core';
import { IRecomendacionesInterface } from 'src/app/core/models/IRecomendaciones.interface';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  recomendacionesEmergencia: IRecomendacionesInterface[] = [
    {
        titulo: "Ubica las zonas seguras y estructuras firmes para protegerte",
        subtitulo: "Muy importante para saber donde estar en caso de emergencia",
        informacion: "Incluye vendas, gasas, alcohol y otros suministros médicos esenciales.",
        img: 'https://i0.wp.com/damajer.com/wp-content/uploads/2019/11/SENAL-ZONA-SEGURA-EN-CASO-DE-SISMOS.png?fit=1080%2C1080&ssl=1',
        tipo: 'Antes'
    },
    {
        titulo: "Ten preparada una mochila de emergencia.",
        subtitulo: "Manten una mochila con suministros básicos",
        informacion: "Incluye vendas, gasas, alcohol y otros suministros médicos esenciales.",
        img: 'https://promart.vteximg.com.br/arquivos/ids/602543-1000-1000/108009.jpg?v=637426058339300000',
        tipo: 'Antes'
    },
    {
        titulo: "Participa en los simulacros de sismo de tu barrio.",
        subtitulo: "Participa activamente en los simulacros de sismo",
        informacion: "Es importante que sepas como actuar en caso de emergencia.",
        img: 'https://www.rcrperu.com/wp-content/uploads/2019/06/actualidad-simulacro-sismo-se-realizara-este-viernes-31-mayo-nivel-nacional-n373200-764x480-582119.jpg',
        tipo: 'Antes'
    },
    {
        titulo: "Mantén la calma. El asustarte solo puede paralizarte o hacerte cometer errores.",
        subtitulo: "Mantén la calma en caso de emergencia",
        informacion: "Manterner la calma es importante para poder actuar correctamente.",
        img: 'https://cdn-e360.s3-sa-east-1.amazonaws.com/mantengan-la-calma-como-ensenarles-a-ninos-y-ninas-a-sobrellevar-las-emergencias-large-lKP8b7JpSx.jpg',
        tipo: 'Durante'
    },
    {
      titulo: "Aléjate de las ventanas y objetos que pueden caerse.",
      subtitulo: "Alejarse de obejetos que puedan caerse",
      informacion: "Para protegerte de los objetos que puedan caerse es importante que te alejes de ellos.",
      img: 'https://franciscotorreblanca.es/wp-content/uploads/2019/11/teoria-de-las-ventanas-rotas.jpg',
      tipo: 'Durante'
    },
    {
      titulo: 'Si no llegas rápido a la salida, busca un espacio seguro',
      subtitulo: 'En caso de emergencia busca un espacio seguro',
      informacion: 'Si te encuentras en un lugar cerrado y no puedes llegar rápidamente a una salida en caso de emergencia, busca un espacio seguro debajo de una mesa o escritorio resistente o contra una pared interior lejos de ventanas, espejos y objetos que puedan caer. Si te encuentras en un espacio abierto, busca un lugar sin edificios cercanos, postes de luz o árboles grandes.',
      img: 'https://cbb.edu.pe/wp-content/uploads/2022/05/Aprender-a-reconocer-las-zonas-seguras.jpg',
      tipo: 'Durante'
    },
    {
      titulo: 'Revisa si hay fugas de gas que podrían causar fuego',
      subtitulo: 'Después de un sismo revisa el Lugar',
      informacion: 'Después de un sismo, revisa si hay fugas de gas que podrían causar fuego. Si hueles gas o escuchas un soplido de gas, cierra inmediatamente el interruptor principal de gas y evacua el edificio. No enciendas cerillos ni interruptores de luz ni hagas nada que pueda provocar una chispa. Avisa a las autoridades y a la compañía de gas. Espera a que las autoridades indiquen que es seguro volver al edificio antes de hacerlo.',
      img: 'https://cdn2.salud180.com/sites/default/files/styles/16x9_large/public/field/image/2020/11/que-hacer-fuga-gas-principal.jpg',
      tipo: 'Despues'
    },
    {
      titulo: 'Ten cuidado con las posibles réplicas. Evita estar cerca a casas que han sido afectadas por el sismo.',
      subtitulo: 'Después de un sismo',
      informacion: 'Después de un sismo, ten cuidado con las posibles réplicas. Estas pueden ser fuertes y causar daños adicionales. Si estás dentro de un edificio, mantente alejado de ventanas, estantes y objetos que puedan caer. Si estás fuera, aléjate de postes de luz, árboles y edificios que puedan colapsar. Además, evita estar cerca a casas que hayan sido afectadas por el sismo, ya que pueden ser inestables y colapsar en cualquier momento. Si estás en un área afectada por el sismo, sigue las indicaciones de las autoridades y mantente informado sobre las réplicas y la situación de emergencia.',
      img: 'https://www.rosario3.com/__export/1658749931183/sites/rosario3/img/2022/07/25/casa_derrumbada_2.jpg',
      tipo: 'Despues'
    },
    {
      titulo: "Si estás cerca al mar, aléjate de la zona hasta que se descarte la posibilidad de un maremoto.",
      subtitulo: "Importante para evitar ser afectado por un maremoto",
      informacion: "Los tsunamis son olas gigantes que pueden causar daños y destrucción en las zonas costeras, por lo que es importante alejarse de la zona hasta que se descarte la posibilidad de un maremoto.",
      img: "https://cdn-e360.s3-sa-east-1.amazonaws.com/proyectop_article_f5a80cde593fa793909fb2fcf761f34b_jpg_1000x665_100_6055.jpg",
      tipo: 'Despues'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
