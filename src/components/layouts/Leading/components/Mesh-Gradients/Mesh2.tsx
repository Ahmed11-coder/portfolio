import React from 'react'
import './Mesh.css';

export default function Mesh() {
    return (
        <svg width="600 " height="600" viewBox="0 0 700 510" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute z-1 bottom-0 left-0 h-full'>
            <g filter="url(#filter0_f_106_583)">
                <path className="animated-path2" d="M170.383 410.552C164.887 247.143 41.4336 142.368 -13 121V793H488C410.313 757.689 177.253 614.814 170.383 410.552Z" fill="url(#paint0_radial_106_583)"/>
            </g>
            <defs>
                <filter id="filter0_f_106_583" x="-133.5" y="0.266602" width="741.707" height="913.233" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_106_583"/>
                </filter>
                <radialGradient id="paint0_radial_106_583" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" className='animated-gradient2' gradientTransform="translate(227.5 478.5) rotate(129.596) scale(262.797 185.535)">
                    <stop className="color-stop-1" stopColor="#D3FF94"/>
                    <stop className="color-stop-2" offset="0.629808" stopColor="#BBEF87"/>
                    <stop className="color-stop-3" offset="1" stopColor="#7BC262"/>
                </radialGradient>
            </defs>
        </svg>
    )
}
