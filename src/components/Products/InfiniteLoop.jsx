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
                dur="12s"
                repeatCount="indefinite"
            />
        </path>
    </g>
);

const InfiniteLoop = () => {
    const centerPath = "M400,200 C550,50 750,50 750,200 C750,350 550,350 400,200 C250,50 50,50 50,200 C50,350 250,350 400,200";

    // Path slightly offset for the edge highlight effect
    const edgePath = "M400,200 C560,40 760,40 760,200 C760,360 560,360 400,200 C240,40 40,40 40,200 C40,360 240,360 400,200";

    const extraStars = [
        { x: 80, y: 150, s: 0.8, d: "2s", del: "0s" },
        { x: 720, y: 150, s: 0.9, d: "2.5s", del: "0.5s" },
        { x: 150, y: 320, s: 0.7, d: "3s", del: "1s" },
        { x: 650, y: 320, s: 1.1, d: "2.2s", del: "0.2s" },
        { x: 400, y: 140, s: 0.6, d: "4s", del: "1.5s" },
        { x: 250, y: 80, s: 0.8, d: "2.8s", del: "0.8s" },
        { x: 550, y: 80, s: 0.7, d: "3.5s", del: "1.2s" },
        { x: 50, y: 250, s: 0.5, d: "2.3s", del: "0.3s" },
        { x: 750, y: 250, s: 1.0, d: "3.1s", del: "0.7s" },
        { x: 400, y: 270, s: 0.4, d: "2.7s", del: "1.1s" },
        { x: 300, y: 340, s: 0.6, d: "3.2s", del: "0.4s" },
        { x: 500, y: 340, s: 0.8, d: "2.9s", del: "0.9s" },
    ];

    return (
        <div className="w-full flex justify-center items-center bg-white py-6 md:py-10 overflow-hidden">
            <svg
                viewBox="0 60 800 300"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto max-w-5xl"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="vibrantGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0a3c6d" />
                        <stop offset="25%" stopColor="#0ea5e9" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="80%" stopColor="#a3e635" />
                        <stop offset="100%" stopColor="#0a3c6d" />
                    </linearGradient>

                    <filter id="mainGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="streakBloom" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="starBloom" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* 1. LAYERED BACKGROUND GLOW */}
                <path d={centerPath} fill="none" stroke="url(#vibrantGrad)" strokeWidth="38" opacity="0.2" filter="url(#mainGlow)" />

                {/* 2. MAIN COLOR RIBBON */}
                <path
                    d={centerPath}
                    fill="none"
                    stroke="url(#vibrantGrad)"
                    strokeWidth="32"
                    strokeLinecap="round"
                />

                {/* 3. LIGHT STREAKS (Layered for depth) */}
                {/* Center Pulse Streak */}
                <path d={centerPath} fill="none" stroke="white" strokeWidth="4" opacity="0.55" strokeDasharray="150, 850" strokeLinecap="round" filter="url(#streakBloom)">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3.5s" repeatCount="indefinite" />
                </path>

                {/* Fast Edge Highlight Streak */}
                <path d={edgePath} fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" strokeDasharray="80, 920" strokeLinecap="round" filter="url(#streakBloom)">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" repeatCount="indefinite" />
                </path>

                {/* 4. ENHANCED DYNAMIC STARS */}
                <g filter="url(#starBloom)">
                    {extraStars.map((star, i) => (
                        <Star key={i} x={star.x} y={star.y} scale={star.s} dur={star.d} delay={star.del} />
                    ))}
                </g>

                {/* 5. CENTER BRANDING AREA */}
                <g transform="translate(400, 200)">
                    <rect x="-90" y="-32.5" width="180" height="65" fill="white" rx="4" />
                    <line x1="-80" y1="-32.5" x2="80" y2="-32.5" stroke="#E2E8F0" strokeWidth="2.5" />
                    <line x1="-80" y1="32.5" x2="80" y2="32.5" stroke="#E2E8F0" strokeWidth="3" />

                    <g textAnchor="middle" fontFamily="sans-serif">
                        <text y="-2" fontSize="22" fontWeight="700" fill="#0f172a" style={{ letterSpacing: '-0.4px' }}>
                            WON Suite
                        </text>
                        <text y="18" fontSize="10" fontWeight="500" fill="#475569" style={{ letterSpacing: '0.8px' }}>
                            Simple | Smart | Secure
                        </text>
                    </g>
                </g>

                {/* 6. LABELS */}
                <g fontFamily="sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.2px">
                    <text x="180" y="207" fill="#1e293b" textAnchor="middle">Human Experiences</text>
                    <text x="620" y="207" fill="#14532d" textAnchor="middle">Industry Operations</text>
                </g>
            </svg>
        </div>
    );
};

export default InfiniteLoop;