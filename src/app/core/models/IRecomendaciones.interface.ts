export interface IRecomendacionesInterface {
    titulo: string;
    subtitulo: string;
    informacion: string;
    img: string;
    tipo?: string
}

export enum TipoRecomendacion {
    Antes,
    Durante,
    Despues
}