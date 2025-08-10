export interface Link {
    href: string;
    label: string;
    color?: string;
    size?: string;
}

export interface Button {
    href: string;
    label: string;
    color?: string;
    animation?: string;
}

export interface pointSVG {
    x: number;
    y: number;
    originX: number;
    originY: number;
    noiseOffsetX: number;
    noiseOffsetY: number;
}

export interface MashProps {
    width: string;
    height: string;
    path: string;
    viewBox: string;
    modeColor: string;
    MashPos: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    }
    colors: {
        primary: string;
        secondary: string;
    }
}