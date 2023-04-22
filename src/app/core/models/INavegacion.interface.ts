import { ISvgInterface } from "./IICono.interface";

export interface INavegacionInterface {
    id: number;
    name: string;
    path: string;
    svg: ISvgInterface;
    color: string;
    state: boolean;
}