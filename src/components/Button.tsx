"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {

  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 border border-transparent",
    secondary: "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600",
    outline: "bg-transparent text-white border border-slate-500 hover:border-blue-400 hover:text-blue-400",
  };

  // Since we are using Vanilla CSS/Global styles, we'll map these classes to style objects or use clsx if available. 
  // However, for simplicity without tailwind, I'll use inline styles or mapped class names that I will define in a module 
  // OR strictly adhere to the user's request for Vanilla CSS. 
  // BUT the user asked for Vanilla CSS, and I am using tailwind-like utility classes in the string above which won't work without Tailwind.
  // I must rewrite this to use CSS Modules or standard CSS classes.

  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} {...props}>
      {children}
      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
          font-family: inherit;
        }
        .btn:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--primary);
        }
        .btn:active {
          transform: scale(0.98);
        }
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Sizes */
        .btn-sm { padding: 8px 16px; font-size: 0.875rem; }
        .btn-md { padding: 12px 24px; font-size: 1rem; }
        .btn-lg { padding: 16px 32px; font-size: 1.125rem; }

        /* Variants */
        /* Variants */
        .btn-primary {
          background: #3b82f6;
          color: white;
          box-shadow: none;
          border: 1px solid transparent;
        }
        .btn-primary:hover {
          background: #2563eb;
        }

        .btn-secondary {
          background: #1e293b;
          color: #f8fafc;
          border: 1px solid #334155;
        }
        .btn-secondary:hover {
          background: #334155;
        }

        .btn-outline {
          background: transparent;
          color: #f8fafc;
          border: 1px solid #475569;
        }
        .btn-outline:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }
      `}</style>
    </button>
  );
}
