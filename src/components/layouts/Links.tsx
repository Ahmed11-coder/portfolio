import React from 'react'
import CusLink from '../ui/CusLink'

export default function Links() {
    return (
        <nav className="fixed top-16 left-1/2 transform -translate-x-1/2 flex w-1/2 justify-between z-4">
            <CusLink href='/' label='About' size={"text-2xl"}/>
            <CusLink href='/' label='Skills' size={"text-2xl"}/>
            <CusLink href='/' label='Projects' size={"text-2xl"}/>
            <CusLink href='/' label='Contact' size={"text-2xl"}/>
            <CusLink href='/' label='Blog' size={"text-2xl"}/>
        </nav>
    )
}
