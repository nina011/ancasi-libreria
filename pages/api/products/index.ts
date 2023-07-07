import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANTS } from '../../../database'
import { Book } from '../../../models'
import { IBook } from '../../../interfaces'
import { isValidObjectId } from 'mongoose'

type Data = 
    | { message: string }
    | IBook[]
    | IBook;


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
   
   switch(req.method){
    case 'GET':
        return getProducts(req, res)
    case 'PUT':
        
    default:
        return res.status(400).json({
            message: 'Bad request'
        })
   }
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { gender = 'all' } = req.query;
    let condition = { };

    if(gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)){
        condition = { gender: gender }
    }
    await db.connect();
    const products = await Book.find(condition)
                                  .select('title image price inStock slug -_id')
                                  .lean();

    await db.disconnect()

    return res.status(200).json( products )

}
