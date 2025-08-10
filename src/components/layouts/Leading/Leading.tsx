'use client'
import React, { useEffect, useState } from 'react'

// Import Components
import Mesh from './components/Mesh-Gradients/Mesh'
import CutstomScrollbar from './components/Scrollbar/CutstomScrollbar'

// Import Some Types
import { MashProps } from '@/lib/auth';

// Import Icons From Lucide
import { Github, Linkedin } from 'lucide-react'

export default function Background({Content}: {Content: React.ReactNode}) {
    const [path1, setPath1] = useState<MashProps|null>(null);
    const [path2, setPath2] = useState<MashProps|null>(null);
    useEffect(() => {
        console.log(document.body.offsetHeight);
        setPath1({
            path: `150.4996 6.50002 -30.2473 300.594 200.371 440.43 489.371 492.727 600.371 800.727 489.371 938.722 123.328 1024 657.001 ${document.body.offsetWidth - 200} ${document.body.offsetHeight - 300} 838.989 1004.66 ${document.body.offsetWidth} ${document.body.offsetHeight}`,
            width: "718",
            height: "1024",
            viewBox: "-120 0 718 1024",
            MashPos: {
                top: "0",
                right: "0",
            },
            colors: {
                primary: "211, 255, 148",
                secondary: "123, 194, 98"
            },
            modeColor: "white"
        })
        setPath2({
            path: `-150 283.52 0 1004.66 450 800 400 700 200 600 100 500 150 360 100 300`,
            width: "505",
            height: "658",
            viewBox: "0 0 505 658",
            MashPos: {
                bottom: "0",
                left: "0",
            },
            colors: {
                primary: "211, 255, 148",
                secondary: "123, 194, 98"
            },
            modeColor: "white"
        })
    }, [])

    return (
        <div className='w-[100dvw] h-[100dvh] absolute bg-size-[64px_64px] bg-[linear-gradient(to_right,#7BC26230_1px,transparent_1px),linear-gradient(to_bottom,#7BC26230_1px,transparent_1px)]'>
            <div className='w-full h-full absolute bg-[radial-gradient(transparent_0%,white_55%)]'>
            </div>
            {path1 && (
                <Mesh path={path1.path} width={path1.width} height={path1.height} viewBox={path1.viewBox} colors={path1.colors} MashPos={path1.MashPos} modeColor={path1.modeColor}/>
            )}
            <div className="w-[calc(100%-5rem)] h-[calc(100%-5rem)] relative m-10">
                <div className='absolute top-0 left-0 w-full h-full p-10 z-2'>
                    {Content}
                </div>
                <a href="mailto:ahmedhashem2158@gmail.com" title='ahmedhashem2158@gmail.com' className='absolute font-light text-black top-52 -right-21 -rotate-90 text-sm tracking-wide z-2'>ahmedhashem2158@gmail.com</a>
                <div className="flex flex-col gap-4 absolute bottom-28 right-4 z-2">
                    <a href="https://github.com/Ahmed11-coder" title='My GitHub'><Github size={28} strokeWidth={1} color={"#00000080"} className='cursor-pointer'/></a>
                    <a href="https://www.linkedin.com/in/ahmed-hashem-04117223a/" title='My LinkedIn'><Linkedin size={28} strokeWidth={1} color={"#00000080"} className='cursor-pointer'/></a>
                </div>
            </div>
            {path2 && (
                <Mesh path={path2.path} width={path2.width} height={path2.height} viewBox={path2.viewBox} colors={path2.colors} MashPos={path2.MashPos} modeColor={path2.modeColor}/>
            )}
            <hr className='absolute rounded-full bottom-16 left-16 w-0.5 h-48 bg-main z-2'/>
            <CutstomScrollbar />
        </div>
    )
}
