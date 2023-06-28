import { FC, useEffect, useReducer } from 'react'
import Cookie from 'js-cookie'

import { CartContext, cartReducer } from './' 
import { ICartProduct } from '../../interfaces'
import { APP_PATHS_MANIFEST } from 'next/dist/shared/lib/constants'

export interface CartState{
    isLoaded: boolean,
    cart: ICartProduct[],
    numberOfItems: number,
    subTotal: number, 
    tax: number,
    total: number
}

const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart:[],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0
} 

interface Props{
    children: React.ReactNode;
}

export const CartProvider:FC<Props> = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, CART_INITIAL_STATE)

    
    useEffect(() => {
        try{
            const cookieProducts = Cookie.get('cart') ? JSON.parse( Cookie.get('cart')!): [] 
            dispatch({
                type: '[Cart] - LoadCart from cookies | storage',
                payload: cookieProducts
            })
        }catch(e){
            dispatch({
                type: '[Cart] - LoadCart from cookies | storage',
                payload: []
            })
        }
    }, [])
    
    useEffect(() =>{
        Cookie.set('cart', JSON.stringify(state.cart))
    } , [state.cart])

    useEffect(() =>{
        // para hacer el conteo de productos
        const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0)
        const subTotal = state.cart.reduce((prev, current) => (current.price * current.quantity) + prev, 0)
        const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)
 
        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * ( taxRate + 1 )
        }

        dispatch({
            type: '[Cart] - Update order summary',
            payload: orderSummary
        })
    } , [state.cart])

    const addProductToCart = (product: ICartProduct) => {
        console.log('comunicandose con funcion addproduct de cartProvider')
   
        // nivel 1
        // dispatch({ type: '[Cart] - Add Product', payload: product})

        // nivel 2
        // const productsInCart = state.cart.filter( p => p._id !== product._id && p.size !== product.size )
        // dispatch({ type: '[Cart] - Add Product', payload: [...productsInCart, product]})
        
        // nivel final

        // 1. verificar si existe un producto con el mismo id
        const productInCart = state.cart.some( p => p._id === product._id)
        if( !productInCart ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product ]})
    
        const productInCartDifferentSize = state.cart.some( p => p._id === product._id && p.size === product.size)
        if( !productInCartDifferentSize ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product ]})
    
        // si el producto existe y tabien en la misma talla.. hay que acumuar
        
        const updatedProducts = state.cart.map(p => {
            if(p._id !== product._id) return p;
            if(p.size !== product.size) return p;

            //atualiza cantidad
            p.quantity += product.quantity;
            
            return p
        })

        dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts })
    }


    const updateCartQuantity = ( product: ICartProduct ) => {
        dispatch({
            type: '[Cart] - Change cart quantity', 
            payload: product
        })
    }

    const removeCartProduct = (product: ICartProduct) => {
        dispatch({
            type: '[Cart] - Remove product in cart',
            payload: product
        })
    }

    return (
        <CartContext.Provider value={{
            ...state,
            //methods
            addProductToCart,
            updateCartQuantity,
            removeCartProduct
        }}
        >
        { children }
        </CartContext.Provider>
    )
}
