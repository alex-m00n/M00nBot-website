'use client';

import { useState, useRef, useEffect } from 'react';

interface SpotlightButtonProps {
    children: React.ReactNode;
    href: string;
    className: string;
}

export default function SpotlightButton({ children, href, className }: SpotlightButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <>
            <a href={href} className={`h-fit ${className}`}>
                <div
                    ref={buttonRef}
                    className={`h-fit ${className} w-auto relative overflow-hidden group p-2 rounded-xl align-middle bg-primary text-center`}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="relative z-10">{children}</span>
                    <div
                        className="pointer-events-none absolute -inset-px transition duration-300"
                        style={{
                            opacity,
                            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(93,0,255,1), transparent 40%)`,
                        }}
                    />
                </div>
            </a>
        </>
    );
} 