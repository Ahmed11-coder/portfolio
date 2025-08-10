"use client"
import React, { useRef } from 'react'

// Some External Libraries
import { createNoise2D } from "simplex-noise";
import { spline } from "@georgedoescode/spline";
import clsx from 'clsx';

// Import Some Types
import { pointSVG , MashProps} from '@/lib/auth';

// Noise Function Which Generate Random Number
const noise2D = createNoise2D();
let noiseStep = 0.003; // Noise Step To Update Noise Offset

// Noise Function Which Will Return A Random Number From -1 To 1
function noise(x: number, y: number) {
    return noise2D(x, y);
}

// Function To Get Points From Path Of Points 
function getPoints(path: string): pointSVG[]|undefined {
    let points: (pointSVG[]|undefined) = path.match(/(-?\d+.?\d+ ?)(-?\d+.?\d+)/gm)?.map((point : string) => {
        let [x, y] = point.split(" ");
        return {
            x: Number(x),
            y: Number(y),
            originX: Number(x),
            originY: Number(y),
            noiseOffsetX: Math.random() * 1000,
            noiseOffsetY: Math.random() * 1000,
        }
    })
    
    return points;
}

// Function To Map Number From -1 To 1 To Another Range
function map(n: number, start1: number, end1: number, start2: number, end2: number) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

// Mesh Component
export default function Mesh({width, height, path, viewBox, MashPos, colors, modeColor}: MashProps) {
    // Position Of Mesh Which Got From Props
    const MashStyle = clsx([
        "absolute h-full",
        MashPos?.right?.length && `right-${MashPos.right}`,
        MashPos?.left?.length && `left-${MashPos.left}`,
        MashPos?.top?.length && `top-${MashPos.top}`,
        MashPos?.bottom?.length && `bottom-${MashPos.bottom}`,
    ])

    // Path Ref To Get Path Element
    const pathRef = useRef<SVGPolylineElement>(null);
    // Get Points From Path Points From Props
    const points = getPoints(path);
    
    // Primary & Secondary Colors Got From Props As RGB String Then Convert It To Array Of Ratio Number
    const primary = colors.primary.split(', ').map((color: string) => Number(color)/255);
    const secondary = colors.secondary.split(', ').map((color: string) => Number(color)/255);

    (function animate() {
        if (points) {
            // If Points Length Is More Than 2 Then Draw Path Using Spline Function Which Link The Two (Or More) Points With Curve
            if (points.length >= 2) {
                pathRef.current?.setAttribute("d", spline(points!, 1, true));
            }
    
            // Loop Over Points To Update Each Point Position
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
    
                // Get Noise Value From Noise Function Which Will Be A Random Value From -1 To 1
                const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
                const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    
                // Map Noise Value To New Position
                const x = map(nX, -1, 1, Number(point.originX) - 50, Number(point.originX) + 20);
                const y = map(nY, -1, 1, Number(point.originY) - 60, Number(point.originY) + 20);
    
                // Update Point Position
                point.x = x;
                point.y = y;
    
                // Update Noise Offset
                point.noiseOffsetX += noiseStep;
                point.noiseOffsetY += noiseStep;
            }
        }

        requestAnimationFrame(animate);
    })();

    return (
        <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={MashStyle}>
            <g>
                <path filter="url(#mash-style)" ref={pathRef} d="" fill={modeColor||"white"}/>
            </g>
            <defs>
                <filter id='mash-style' x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
                        <feFlood floodColor="red" floodOpacity="1" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="20"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values={`0 0 0 0 ${primary[0]} 0 0 0 0 ${primary[1]} 0 0 0 0 ${primary[2]} 0 0 0 1 0`}/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_201_598"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="9"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values={`0 0 0 0 ${secondary[0]} 0 0 0 0 ${secondary[1]} 0 0 0 0 ${secondary[2]} 0 0 0 1 0`}/>
                        <feBlend mode="normal" in2="effect2_innerShadow_201_598" result="effect3_innerShadow_201_598"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="110"/>
                        <feGaussianBlur stdDeviation="50"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values={`0 0 0 0 ${primary[0]} 0 0 0 0 ${primary[1]} 0 0 0 0 ${primary[2]} 0 0 0 1 0`}/>
                        <feBlend mode="normal" in2="effect3_innerShadow_201_598" result="effect4_innerShadow_201_598"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="7"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect4_innerShadow_201_598" result="effect5_innerShadow_201_598"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="39"/>
                        <feGaussianBlur stdDeviation="28"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values={`0 0 0 0 ${secondary[0]} 0 0 0 0 ${secondary[1]} 0 0 0 0 ${secondary[2]} 0 0 0 1 0`}/>
                        <feBlend mode="normal" in2="effect5_innerShadow_201_598" result="effect6_innerShadow_201_598"/>
                </filter>
            </defs>
        </svg>
    )
}