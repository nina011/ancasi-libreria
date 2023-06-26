import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { User } from '../../../models'
import bcrypt from 'bcryptjs'
import { jwt } from '../../../utils'

type Data = 
| {  message: string }
| {  token: string;
     user:{
        email: string;
        name: string;
        role: string
}}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // res.status(200).json({ name: 'Example' })

    switch( req.method ){
        case 'GET':
            return checkJWT(req, res)
        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const checkJWT = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    // throw new Error('Function not implemented.')
    const { token = '' }  =  req.cookies;

    let userId = '';

    try{

        userId = await jwt.isValidToken( token )

    }catch(err){
        return res.status(400).json({
            message: 'Token de autorización no es válido'
        })
    }

    await db.connect()
    const user = await User.findById( userId ).lean()
    await db.disconnect()

    if(!user){
        return res.status(400).json({
            message:'No existe usuario con ese id'
        })
    }

    // await db.connect()
    // const user = await User.findOne({ email })
    // await db.disconnect()

    // if(!user){
    //     return res.status(400).json({ message: 'correo o contraseña no validos - email'})
    // }

    // if( !bcrypt.compareSync( password, user.password! )){
    //     return res.status(400).json({ message: 'correo o contraseña no validos - contraseña'})
    // }

    const { role, name, _id, email } = user;

    return res.status(200).json({
        token: jwt.signToken(_id, email),
        user:{
            email, role, name
        }
    })
}
