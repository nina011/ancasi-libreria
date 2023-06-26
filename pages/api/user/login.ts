import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { User } from '../../../models'
import bcrypt from 'bcryptjs'

type Data = 
| {  message: string }
| {  token: string;
     user:{
        email: string;
        name: string;
        role: string
}}

export default function  handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // res.status(200).json({ name: 'Example' })

    switch( req.method ){
        case 'POST':
            return loginUser(req, res)
        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const loginUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    // throw new Error('Function not implemented.')
    const { email = '', password = ''} =  req.body;

    await db.connect()
    const user = await User.findOne({ email })
    console.log('email ',email)
    console.log('user', user)
    await db.disconnect()

    if(!user){
        return res.status(400).json({ message: 'correo o contraseña no validos - email'})
    }

    if( !bcrypt.compareSync( password, user.password! )){
        return res.status(400).json({ message: 'correo o contraseña no validos - contraseña'})
    }

    const { role, name } = user;

    return res.status(200).json({
        token: '', //jwt
        user:{
            email, role, name
        }
    })
}
