export interface ICentroAyudaInterface {
    id: number;
    nombre: string;
    ubicacion: string;
    telefono: string;
    imagenes: IImagenInterface[];
}

export interface IImagenInterface {
    id: number;
    url: string;
}