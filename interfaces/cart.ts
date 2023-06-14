import { ISize } from "./Products";

export interface ICartProduct {
    _id: string;
    description: string;
    images: string;
    price: number;
    sizes: ISize;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex'
    quantity: number;
}