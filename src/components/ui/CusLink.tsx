import { Link as LinkProps } from '@/lib/auth'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export default function CusLink(props : LinkProps ) {
    const linkClass = clsx([
        "inline-block relative font-semibold before:w-0 hover:before:w-full before:duration-300 before:ease-in-out before:h-[3px] before:absolute before:-bottom-[1px]",
        props.size ? props.size : `text-lg`,
        props.color ? props.color : "text-black before:bg-black"
    ])
    return (
        <Link href={props.href} className={linkClass}>{props.label}</Link>
    )
}
