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

export const getAllProductsSlugs = async(): Promise<ProductSlug[]> => {
    await db.connect()
    const slugs = await Book.find().select('slug -_id').lean()
    await db.disconnect()

    return slugs
}

export const getProductsByTerm = async ( term: string ):Promise<IBook[]> => {

    term = term.toString().toLowerCase()

    await db.connect()

    const products = await Book.find({
        $text: { $search: term }
    })
    .select('title images price inStock slug -_id')
    .lean()

    await db.disconnect()

    return products;
}

export const getAllProducts = async(): Promise<IBook[]> =>{

    await db.connect()
    const allProducts = await Book.find().select('-_id')
    await db.disconnect()

    return JSON.parse( JSON.stringify( allProducts ))

}