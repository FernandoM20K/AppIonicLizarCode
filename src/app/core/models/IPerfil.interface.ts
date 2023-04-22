export interface IPerfilInterface {
    id: number;
    name: string;
    photo: string;
    lastname: string;
    phonenumber: string;
    email: string;
    redesSociales: IRedesSocialesInterface[];
}

export interface IRedesSocialesInterface {
    name: string;
    link: string;
}