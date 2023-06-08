import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../interfaces'

type Data = 
| { message: string }
| IProduct[]

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    // res.status(200).json({ message: 'Example' })
    switch ( req.method ) {
        case 'GET':
            return searchProducts( req, res )
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    let { query = '' } = req.query

    if(query.length === 0)return res.status(400).json({ message: 'Debe especificar el query de busqueda'})

    query = query.toString().toLowerCase()

    await db.connect()

    const products = await Product.find({
        $text: { $search: query }
    }).lean()

    await db.disconnect()

    return res.status(200).json(products)
}
