import type { NextApiRequest, NextApiResponse } from 'next'
import { IBook } from '../../../interfaces';
import { db } from '../../../database';
import { Book } from '../../../models';

type Data = 
| { message: string }
| IBook[]

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
    switch (req.method) {
        case 'GET':
            return getBooks(req, res)
        case 'PUT':
            
        case 'POST':
    
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getBooks = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    await db.connect();

    const books = await Book.find()
        .sort({ title: 'asc' })
        .lean();

    await db.disconnect();

    // TODO:
    // actualizar imagenes

    res.status(200).json(books)
}
