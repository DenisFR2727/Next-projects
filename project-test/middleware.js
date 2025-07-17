import { NextResponse } from 'next/server';

// reserverd name file  middleware
export function middleware(request) {
    // console.log(request);
    return NextResponse.next();
}
// config - дозволить фільтрувати типи запитів що запускають проміжне програмне запезпечення
export const config = {
    matcher: '',
};
