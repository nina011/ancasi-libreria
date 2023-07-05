import mongoose, { Schema, model, Model } from 'mongoose';
import { IBook } from '../interfaces';

const bookSchema = new Schema({
    description: { type: String, required: true },
    image: { type: String },
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    gender: {
        type: String, 
        enum: {
            values: [
                    'drama',
                    'ficción',
                    'acción',
                    'novela',
                    'terror',
                    'autoayuda',
                    'poesía',
                    'romance',
                    'manga',
                    'leyendas',
                    'cocina',
                    'científico',
                    'educacional',
                    'niños',
                    'física',
                    'informática'
                ],
            message: '{VALUE} no es un genero válido'
        }
    },
    author: {

    }
},{
    timestamps: true
})

bookSchema.index({ title: 'text', tags: 'text'})

const Book: Model<IBook> = mongoose.models.Book || model('Book', bookSchema)

export default Book