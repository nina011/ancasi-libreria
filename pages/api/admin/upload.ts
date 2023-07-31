import { PauseCircleFilledSharp } from '@mui/icons-material'
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable';
import { File, IncomingForm } from 'formidable';
import fs from 'fs'

type Data = {
    message: string
}

export const config = {
    api: {
        bodyParser: false
    }
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST':
            return uploadFile(req, res)
    
        default:
            res.status(400).json({ message: 'Bad request' })
    }
}

const saveFile = async( file: any) =>{

    const data = fs.readFileSync( file[0].filepath)
    fs.writeFileSync(`./public/books/${ file[0].originalFilename }`, data)
    fs.unlinkSync( file[0].filepath )
    return 
}

// const parseFiles = async(req: NextApiRequest) => {
    
//     return new Promise (( resolve, reject ) => {
//         const form = new IncomingForm()
//         form.parse( req, async(err, fields, files) => {
//             console.log(err, fields, files)
            
//             if(err){
//                 return reject(err)
//             }

//             await saveFile( files.file as File)
//             resolve(true)
//         })
//     })
// }

const parseFiles = async(req: NextApiRequest): Promise<string> => {
 
    return new Promise( (resolve, reject) => {
 
        const form = new IncomingForm() ;
        form.parse( req, async( err, fields, files ) => {
            console.log({file: files.image});
 
            if ( err ) {
                console.log('error ', err)
                return reject(err);
            }
 
            const filePath = await saveFile( files.image as File )
            resolve(`${filePath}`);
        })
    }) 
}

const uploadFile = async( req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log('request')
    await parseFiles(req)
}