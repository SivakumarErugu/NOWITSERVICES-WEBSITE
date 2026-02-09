
import React from 'react';

const Star = ({ x, y, scale, dur, delay }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
        <path
            d="M0,-10 L1.5,-1.5 L10,0 L1.5,1.5 L0,10 L-1.5,1.5 L-10,0 L-1.5,-1.5 Z"
            fill="white"
        >
            <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur={dur}
                begin={delay}
                repeatCount="indefinite"
            />
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="90"
                dur="10s"
                repeatCount="indefinite"
            />
        </path>
    </g>
);

const InfiniteLoop = () => {
    const centerPath = "M400,200 C550,50 750,50 750,200 C750,350 550,350 400,200 C250,50 50,50 50,200 C50,350 250,350 400,200";
    const outerPath = "M400,200 C560,40 760,40 760,200 C760,360 560,360 400,200 C240,40 40,40 40,200 C40,360 240,360 400,200";
    const innerPath = "M400,200 C540,60 740,60 740,200 C740,340 540,340 400,200 C260,60 60,60 60,200 C60,340 260,340 400,200";

    const starPositions = [
        { x: 120, y: 80, s: 0.6, d: "2s", del: "0s" },
        { x: 680, y: 115, s: 0.8, d: "2.5s", del: "0.5s" },
        { x: 150, y: 320, s: 0.5, d: "3s", del: "1s" },
        { x: 720, y: 280, s: 0.7, d: "2.2s", del: "0.2s" },
        { x: 400, y: 60, s: 0.4, d: "4s", del: "1.5s" },
        { x: 50, y: 180, s: 0.5, d: "2.8s", del: "0.8s" },
        { x: 750, y: 200, s: 0.6, d: "3.5s", del: "1.2s" },
        { x: 280, y: 50, s: 0.4, d: "2.3s", del: "0.3s" },
        { x: 520, y: 350, s: 0.5, d: "3.1s", del: "0.7s" },
    ];

    return (
        <div className="w-full flex justify-center items-center bg-white py-16 px-10">
            <svg
                viewBox="0 0 800 400"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'saturate(1.3) contrast(1.1)' }}
            >
                <defs>
                    <linearGradient id="vibrantGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0a3c6d" />
                        <stop offset="25%" stopColor="#0ea5e9" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="75%" stopColor="#a3e635" />
                        <stop offset="100%" stopColor="#0a3c6d" />
                    </linearGradient>

                    <filter id="highBloom" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* 1. Main Ribbon */}
                <path d={centerPath} fill="none" stroke="url(#vibrantGrad)" strokeWidth="24" strokeLinecap="round" opacity="0.9" />

                {/* 2. Light Streaks */}
                <path d={outerPath} fill="none" stroke="white" strokeWidth="2" strokeDasharray="120, 880" strokeLinecap="round" filter="url(#highBloom)">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" repeatCount="indefinite" />
                </path>

                <path d={centerPath} fill="none" stroke="white" strokeWidth="4" strokeDasharray="200, 800" strokeOpacity="0.4" filter="url(#highBloom)">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite" />
                </path>

                {/* 3. The Stars */}
                <g filter="url(#highBloom)">
                    {/* Static Center Star */}
                    <Star x={400} y={200} scale={1.2} dur="1.5s" delay="0s" />

                    {/* Scattered Stars */}
                    {starPositions.map((pos, i) => (
                        <Star key={i} x={pos.x} y={pos.y} scale={pos.s} dur={pos.d} delay={pos.del} />
                    ))}
                </g>

                {/* 4. Center Branding Text with White Background */}
                <g transform="translate(400, 200)">
                    {/* The Background Box */}
                    <rect
                        x="-80"
                        y="-35"
                        width="160"
                        height="60"
                        fill="white"
                        rx="8"
                        opacity="0.95"
                    />

                    {/* The Text */}
                    <g textAnchor="middle" fontFamily="sans-serif">
                        <text y="-5" fontSize="26" fontWeight="800" fill="#1e293b">WON Suite</text>
                        <text y="18" fontSize="11" fontWeight="600" fill="#64748b" letterSpacing="0.5">
                            Simple | Smart | Secure
                        </text>
                    </g>
                </g>

                {/* 4. Labels */}
                <text x="210" y="206" fontFamily="Arial" fontWeight="700" fontSize="16" fill="#1e293b" textAnchor="middle">Individual</text>
                <text x="590" y="206" fontFamily="Arial" fontWeight="700" fontSize="16" fill="#1e293b" textAnchor="middle">Enterprise</text>
            </svg>
        </div>
    );
};

export default InfiniteLoop;