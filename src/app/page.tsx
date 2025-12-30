"use client";

import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-0">
      <div className="container mx-auto text-center z-10 max-w-4xl section-spacing">
        <div className="animate-fade-in flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            Find Your <span className="text-blue-500">Ikigai</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A professional tool to align your passion, skills, values, and career potential. Discover the intersection of what you love and what the world needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link href="/quiz">
              <Button size="lg" className="min-w-[200px]">
                Start Assessment
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="min-w-[200px]" onClick={() => window.open('https://en.wikipedia.org/wiki/Ikigai', '_blank')}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Ikigai Compass. Professional Career Guidance.</p>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </main>
  );
}
