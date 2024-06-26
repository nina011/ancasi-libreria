import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { IBook } from '../../../interfaces'
import { Book } from '../../../models';

type Data = 
| { message: string }
| IBook;


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // res.status(200).json({ message: 'Example' })

    switch( req.method ){
        case 'GET':
            return getProductsBySlug(req, res)

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

async function getProductsBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {

    await db.connect()
    const { slug } = req.query;

    const product = await Book.findOne({ slug }).lean()

    await db.disconnect()

    if(!product){
        return res.status(404).json({
            message: 'Producto no encontrado'
        })
    }

    return res.json( product )
}
