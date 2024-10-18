'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){
    const pathname = usePathname();
    const searchParams = useSearchParams();

    console.log(pathname, searchParams.get('search'))
    return (
        <h1>Cart page </h1>
    )
}