export interface ISvgInterface {
    width: string;
    height: string;
    viewbox?: string;
    fill?: string;
    paths: IPathInterface[];
}

export interface IPathInterface {
    opacity?: string;
    d: string;
    fill: string;
}