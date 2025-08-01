import React from 'react'
import Button from '@/components/ui/Button';

export default function Info() {
    return (
        <main className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-10rem)] ml-10'>
            <span className='ml-10 text-xl font-light text-[#6AA456]'>Hay, I'm Ahmed Hashem</span>
            <h1 className='flex items-center font-bold text-8xl'>Front-end Developer</h1>
            <p className='w-xl text-lg font-light mt-5'>
                I design and develop fast, clean, and responsive user interfaces
                using <b className='font-bold'>React</b>, <b className='font-bold'>Tailwind CSS</b>, <b className='font-bold'>Typescript</b>, Blending <b className='font-bold'>creative design</b> with data-driven thinking.
            </p>
            <Button label='Contact Me!' href='/'/>
        </main>
    )
}
