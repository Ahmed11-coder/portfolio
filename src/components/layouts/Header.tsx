import React from 'react'
import { Marck_Script } from 'next/font/google';
import { Settings } from 'lucide-react'
import Links from './Links';

const marck_script = Marck_Script({
    subsets: ["latin"],
    weight: '400'
})

export default function Header() {
    return (
        <nav className='relative'>
            <div className='flex justify-between items-center'>
                <h1 className={`text-4xl ${marck_script.className} cursor-pointer`}>AH</h1>
                <Settings strokeWidth={1} size={32} className='cursor-pointer'/>
            </div>
            <Links />
        </nav>
    )
}
