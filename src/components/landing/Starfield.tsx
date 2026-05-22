"use client";

import { useEffect, useState } from "react";

interface Star {
    id: number;
    top: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
    opacity: number;
}

interface StarfieldProps {
    count?: number;
    className?: string;
}

export function Starfield({ count = 80, className = "" }: StarfieldProps) {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setStars(
            Array.from({ length: count }).map((_, i) => ({
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() * 2 + 0.5,
                delay: Math.random() * 4,
                duration: 2 + Math.random() * 4,
                opacity: 0.4 + Math.random() * 0.6,
            }))
        );
    }, [count]);

    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {stars.map((s) => (
                <span
                    key={s.id}
                    className="absolute rounded-full bg-yellow-200 animate-twinkle"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        opacity: s.opacity,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.duration}s`,
                        boxShadow: `0 0 ${s.size * 4}px white`,
                    }}
                />
            ))}
        </div>
    );

}

export function ShootingStar({
    top = "20%",
    delay = 0,
}: {
    top?: string;
    delay?: number;
}) {
    return (
        <span
            className="pointer-events-none absolute left-0 z-[20] h-[3px] w-64 bg-gradient-to-r from-transparent to-yellow-300 animate-drift"
            style={{
                top,
                animationDelay: `${delay}s`,
            }}
        />
    );
}