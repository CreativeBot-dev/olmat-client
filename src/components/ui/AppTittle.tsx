import React from 'react'

type AppTitleProps = {
    children: React.ReactNode
    className?: string
}

export default function AppTitle({
    children,
    className,
}: AppTitleProps) {
    return (
        <span
            className={` mb-4 bg-gradient-to-b from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent ${className}`}
        >
            {children}
        </span>
    );
}
