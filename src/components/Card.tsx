import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`glass-panel ${className}`} style={{ padding: '2rem' }}>
            {children}
        </div>
    );
}
