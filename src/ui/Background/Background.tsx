import React from 'react'

import Mesh1 from './components/Mesh-Gradients/Mesh1'
import Mesh2 from './components/Mesh-Gradients/Mesh2'
import CutstomScrollbar from './components/Scrollbar/CutstomScrollbar'

export default function Background({Content}: {Content: React.ReactNode}) {
    return (
        <div className='w-[100dvw] h-[100dvh] absolute bg-size-[64px_64px] bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)]'>
            <div className='w-full h-full absolute bg-[radial-gradient(transparent_0%,white_55%)]'>
            </div>
            <Mesh1 />
            <div className="w-[calc(100%-5rem)] h-[calc(100%-5rem)] relative z-1 rounded-[50px] border-[3px] border-[#EDFED6] m-10 p-10">
                {Content}
            </div>
            <Mesh2 />
            <span className='absolute top-64 -right-12 z-2 -rotate-90 text-[1rem] tracking-wide'>ahmedhashem2158@gmail.com</span>
            <hr className='absolute rounded-full bottom-16 left-16 w-0.5 h-48 bg-[#EDFED6] z-2'/>
            <CutstomScrollbar />
        </div>
    )
}
