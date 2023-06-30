import { NextFetchEvent, NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt'

export async function middleware( req: NextRequest){
//     const { cookies } = req;
//     const { token } = cookies as any;
//    console.log( 'process ',process.env.JWT_SECRET_SEED )

//     const session = await getToken({ 
//         req: req, 
//         secret: process.env.JWT_SECRET_SEED, 
//         cookieName: process.env.NODE_ENV === 'production' ? '__Secure-next-auth.session-token' : 'next-auth.session-token' 
//     })

//     console.log({ session })
//     if( !session ){
//         const requestPage = req.nextUrl.pathname;
//         const url = req.nextUrl.clone();
//         url.pathname = `/auth/login`;
//         url.search = `p=${ requestPage }`;
        
//         return NextResponse.redirect( url );
//     }
//     // console.log({ session })
    return NextResponse.next()
}

// export const config = {
//     matcher: [
//         '/checkout/address', 
//         '/checkout/summary'
//     ]
// }


