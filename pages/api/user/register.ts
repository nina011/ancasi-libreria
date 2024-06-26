import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { User } from '../../../models'
import bcrypt from 'bcryptjs'
import { jwt, validations } from '../../../utils'

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
            return registerUser(req, res)
        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    // throw new Error('Function not implemented.')
    const { email = '', password = '', name = '' } =  req.body as { email: string, password: string, name: string};

    if(password.length < 6){
        return res.status(400).json({
            message: 'La contraseña debe de ser de 6 caracteres o más'
        })
    }

    if(name.length < 3){
        return res.status(400).json({
            message: 'el nombre debe tener al menos 3 caracteres'
        })
    }

    if(!validations.isValidEmail( email )){
        return res.status(400).json({
            message: 'No es un email válido'
        })
    }

    await db.connect()
    const user = await User.findOne({ email })

    if(user){
        return res.status(400).json({
            message: 'No puede usar ese correo'
        })
    }
    
    //TODO: validar email
    const newUser = new User({
        email: email.toLocaleLowerCase(),
        password: bcrypt.hashSync( password ),
        role: 'client',
        name
    })

    try{
        await newUser.save({ validateBeforeSave: true })

    }catch(error){
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    }

    const { _id, role } = newUser;

    const token = jwt.signToken(_id, email)

    return res.status(200).json({
        token, //jwt
        user:{
            email, 
            role, 
            name
        }
    })
}
