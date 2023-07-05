import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDatabase } from '../../database';
import { Book } from '../../models';
import User from '../../models/User';

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
    ) {
    
    if(process.env.NODE_ENV === 'production'){
        return res.status(401).json({ message: 'No tiene acceso a este API' });
    }

    await db.connect()

    await User.deleteMany()
    await User.insertMany( seedDatabase.initialData.users )

    await Book.deleteMany()
    await Book.insertMany(seedDatabase.initialData.products)

    await db.disconnect()
    
    res.status(200).json({ message: 'Proceso realizado correctamente' })
}