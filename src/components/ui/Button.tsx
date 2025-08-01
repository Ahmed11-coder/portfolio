import React from 'react'
import clsx from 'clsx';
import { Button as ButtonProps } from "@/lib/auth";
import Link from 'next/link';

export default function Button(props: ButtonProps) {
    const buttonClass = clsx([
        'inline-block text-sm overflow-hidden border font-light px-4 py-2 mt-4 cursor-pointer',
        props.animation ? `${props.animation}` : "hover:text-white before:-z-1 duration-300 before:duration-300 relative before:absolute before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:ease-[cubic-bezier(0, 0.55, 0.45, 1)] before:bg-black before:w-0 before:h-0 hover:before:w-34 hover:before:h-10",
        props.color ? `text-${props.color} border-${props.color}` : 'text-black border-black',
    ])
    return (
        <Link href={props.href} className={buttonClass}>{props.label}</Link>
    )
}
