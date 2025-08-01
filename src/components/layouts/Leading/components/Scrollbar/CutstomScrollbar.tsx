import React from 'react'

export default function CutstomScrollbar() {
    return (
        <div className='w-2 h-38 absolute top-1/2 border border-main bg-main/42 right-16 rounded-full -translate-y-1/2'>
            <div className='w-full h-[5px] bg-main rounded-full'></div>
        </div>
    )
}
