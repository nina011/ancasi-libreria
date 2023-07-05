import { db } from "."
import { IBook } from "../interfaces"
import { Book } from "../models"

export const getProductBySlug = async(slug: string): Promise<IBook | null> => {

    await db.connect()

    const product = await Book.findOne({ slug }).lean()

    await db.disconnect()

    if(!product) return null 

    return JSON.parse(JSON.stringify(product))

}

interface ProductSlug{
    slug: string
}

export const getAllBooksSlugs = async(): Promise<ProductSlug[]> => {
    await db.connect()
    const slugs = await Book.find().select('slug -_id').lean()
    await db.disconnect()

    return slugs
}

export const getProductsByTerm = async ( term: string ):Promise<IBook[]> => {

    term = term.toString().toLowerCase()

    await db.connect()

    const books = await Book.find({
        $text: { $search: term }
    })
    .select('title image price inStock slug -_id')
    .lean()

    await db.disconnect()

    return books;
}

export const getAllBooks = async(): Promise<IBook[]> =>{

    await db.connect()
    const allBooks = await Book.find().select('-_id')
    await db.disconnect()

    return JSON.parse( JSON.stringify( allBooks ))

}