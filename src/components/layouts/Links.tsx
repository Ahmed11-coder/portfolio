import React from 'react'
import Link from '../ui/link'

export default function Links() {
    return (
        <nav className="fixed top-16 left-1/2 transform -translate-x-1/2 flex w-1/2 justify-between z-4">
            <Link href='/' label='About' labelColor='#000000' size={24}/>
            <Link href='/' label='Skills' labelColor='#000000' size={24}/>
            <Link href='/' label='Projects' labelColor='#000000' size={24}/>
            <Link href='/' label='Contact' labelColor='#000000' size={24}/>
            <Link href='/' label='Blog' labelColor='#000000' size={24}/>
        </nav>
    )
}
