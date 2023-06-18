import { CartState } from "./CartProvider";
import { ICartProduct } from "../../interfaces";

type CartActionType = 
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
    | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
    | { type: '[Cart] - Change cart quantity', payload: ICartProduct }
    | { type: '[Cart] - Remove product in cart', payload: ICartProduct }


export const cartReducer = (state: CartState, action: CartActionType ): CartState => {

    switch(action.type){
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state,
                cart: action.payload
            }
        case '[Cart] - Update products in cart':
            console.log('ha entrado en case')
            return {
                ...state,
                cart:[ 
                    ...action.payload
                ]
            }
        case '[Cart] - Change cart quantity':
            return {
                ...state,
                cart: state.cart.map( prod => {
                    if(prod._id !== action.payload._id) return prod;
                    if( prod.size !== action.payload.size ) return prod;

                    // prod.quantity == action.payload.quantity
                    return action.payload;
                })
            }
        case '[Cart] - Remove product in cart':
            return {
                ...state,
            cart: state.cart.filter(prod => !(prod._id === action.payload._id && prod.size === action.payload.size))
            }
        default:
            return state;
    }
}