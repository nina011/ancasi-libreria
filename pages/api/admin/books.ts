import type { NextApiRequest, NextApiResponse } from 'next'
import { IBook } from '../../../interfaces';
import { db } from '../../../database';
import { Book } from '../../../models';
import { isValidObjectId } from 'mongoose';

type Data = 
| { message: string }
| IBook[]
| IBook

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
    switch (req.method) {
        case 'GET':
            return getBooks(req, res)
        case 'PUT':
            return updatedBook(req, res)
        case 'POST':
            return createBook(req, res)
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

const updatedBook = async (req: NextApiRequest, res: NextApiResponse<Data>)=> {
    
    const { _id = '', image = '' } = req.body as IBook;

    if(!isValidObjectId( _id )){
        return res.status(400).json({ message: 'El id del libro no es váido'})
    }

    try{
        await db.connect()
        const book = await Book.findById(_id)

        if(!book){
            await db.disconnect()
            return res.status(400).json({ message: 'no existe libro con ese id'})
        }

        // todo eliminar fotos en cludinary

        await book.updateOne( req.body)
        await db.disconnect()

        return res.status(200).json(book)
    }catch(err){
        console.log(err)
        await db.disconnect()
        return res.status(400).json({ message: 'Revisar la consola del servidor' })
    }
}

const createBook = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log('funcion create book')
    // const { image = [] } = req.body as IBook;

    // if(image.length < 1) return res.status(400).json({ message: 'El libro necesita una imagen'})
   
    try{
        await db.connect()

        const bookInDb = await Book.findOne({
            slug: req.body.slug
        })

        if(bookInDb){
            await db.disconnect()
            return res.status(400).json({ message: 'Ya existe un libro con ese slug'})
        }
        const book = new Book( req.body )
        await book.save()

        await db.disconnect()

        return res.status(201).json(book)

    }catch(err){
        console.log(err)
    }
}

