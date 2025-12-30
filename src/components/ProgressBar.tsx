import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

// Re-writing the return to use the classes properly
export default function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = Math.min((current / total) * 100, 100);
    return (
        <div className="progress-container">
            <div className="labels">
                <span>Start</span>
                <span>{Math.round(percentage)}% Complete</span>
                <span>End</span>
            </div>
            <div className="track">
                <div className="bar" style={{ width: `${percentage}%` }} />
            </div>
            <style jsx>{`
        .progress-container {
             width: 100%;
             max-width: 400px;
             margin: 0 auto 2rem auto;
        }
        .labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #94a3b8;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .track {
            height: 6px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 999px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .bar {
             height: 100%;
             background: linear-gradient(90deg, var(--primary), var(--accent));
             transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
             box-shadow: 0 0 12px var(--primary-glow);
        }
      `}</style>
        </div>
    );
}
