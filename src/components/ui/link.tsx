import { Link } from '@/lib/auth'
import React from 'react'

export default function link(Content : Link) {
    return (
        <a href={Content.href} className={`text-[${Content.labelColor}] text-2xl relative font-semibold before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:h-[3px] before:bg-black before:absolute before:-bottom-[1px]`}>
            {Content.label}
        </a>
    )
}
