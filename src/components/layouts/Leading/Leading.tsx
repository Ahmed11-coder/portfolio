import React from 'react'

import { Github, Linkedin } from 'lucide-react'

import Mesh1 from './components/Mesh-Gradients/Mesh1'
import Mesh2 from './components/Mesh-Gradients/Mesh2'
import CutstomScrollbar from './components/Scrollbar/CutstomScrollbar'

export default function Background({Content}: {Content: React.ReactNode}) {
    return (
        <div className='w-[100dvw] h-[100dvh] absolute bg-size-[64px_64px] bg-[linear-gradient(to_right,#7BC26230_1px,transparent_1px),linear-gradient(to_bottom,#7BC26230_1px,transparent_1px)]'>
            <div className='w-full h-full absolute bg-[radial-gradient(transparent_0%,white_55%)]'>
            </div>
            <Mesh1 />
            <div className="w-[calc(100%-5rem)] h-[calc(100%-5rem)] relative rounded-[50px] border-[3px] border-main m-10">
                <div className='absolute top-0 left-0 w-full h-full p-10 z-2'>
                    {Content}
                </div>
                <a href="mailto:ahmedhashem2158@gmail.com" title='ahmedhashem2158@gmail.com' className='absolute font-light text-black top-52 -right-21 -rotate-90 text-sm tracking-wide z-2'>ahmedhashem2158@gmail.com</a>
                <div className="flex flex-col gap-4 absolute bottom-28 right-4 z-2">
                    <a href="https://github.com/Ahmed11-coder" title='My GitHub'><Github size={28} strokeWidth={1} color={"#00000080"} className='cursor-pointer'/></a>
                    <a href="https://www.linkedin.com/in/ahmed-hashem-04117223a/" title='My LinkedIn'><Linkedin size={28} strokeWidth={1} color={"#00000080"} className='cursor-pointer'/></a>
                </div>
            </div>
            <Mesh2 />
            <hr className='absolute rounded-full bottom-16 left-16 w-0.5 h-48 bg-main z-2'/>
            <CutstomScrollbar />
        </div>
    )
}
