// export {default} from 'next-auth/middleware'
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req){
        console.log(req.nextUrl);
        console.log(req.nextauth.token.role);

        if(req.nextUrl.pathname.startsWith('/createuser') && req.nextauth.token.role !=='admin'){
            return NextResponse.rewrite(new URL('/denied', req.url));
        }
    },
    {callback:{
        authorized:({token})=>!! token 
    }}, 
);


export const config = {matcher:['/createuser']} 
