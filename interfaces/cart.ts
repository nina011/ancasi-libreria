// import { ISize } from "./Book";

export interface ICartProduct {
    _id: string;
    description?: string;
    image: string;
    price: number;
    // size?: ISize;
    slug: string;
    title: string;
    gender: 
    'drama' 
    |'ficción'
    |'novela'
    |'terror'
    |'autoayuda'
    |'acción'
    |'poesía'
    |'romance'
    |'manga'
    |'leyendas'
    |'cocina'
    |'científico'
    |'educacional'
    |'niños'
    |'física'
    |'informática';
    quantity: number;
}