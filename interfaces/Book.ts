export interface IBook {
    _id: string;
    description: string;
    image: string;
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
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
    |'informática'

    createdAt: string;
    updatedAt: string;
}