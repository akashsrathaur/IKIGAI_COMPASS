"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getCareerSuggestions, Career } from '@/lib/engine';
import Button from '@/components/Button';

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [careers, setCareers] = useState<Career[]>([]);

    useEffect(() => {
        const passion = searchParams.get('passion') || '';
        const mission = searchParams.get('mission') || '';
        const vocation = searchParams.get('vocation') || '';
        const profession = searchParams.get('profession') || '';

        // Simulate thinking delay for "AI" feel
        const timer = setTimeout(() => {
            const results = getCareerSuggestions(passion, mission, vocation, profession);
            setCareers(results);
        }, 800);

        return () => clearTimeout(timer);
    }, [searchParams]);

    return (
        <div className="w-full max-w-5xl mx-auto z-10 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 title-gradient">Your IKIGAI</h1>
            <p className="text-slate-400 mb-12">Based on your unique profile, here are the paths aligned with your purpose.</p>

            {careers.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-500 text-sm font-medium">Analyzing career paths...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {careers.map((career, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-6 flex flex-col h-full hover:border-blue-500/30 transition-colors duration-300"
                            style={{ animation: `fadeIn 0.5s ease-out ${idx * 0.1}s backwards` }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white">{career.title}</h3>
                                <div className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-2 py-1.5 rounded">
                                    {career.matchScore}% Match
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                                {career.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-slate-500 font-medium uppercase">Avg. Salary</span>
                                    <span className="text-sm text-slate-200 font-medium">{career.salary}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium uppercase">Growth</span>
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${career.growth.includes('High') || career.growth.includes('Very') ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                                        {career.growth}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Button onClick={() => router.push('/')} variant="secondary">
                Start Over
            </Button>
        </div>
    );
}

export default function ResultPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start pt-20 p-4 relative overflow-hidden bg-[#0f1115]">
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
            <Suspense fallback={<div>Loading...</div>}>
                <ResultContent />
            </Suspense>
        </main>
    );
}
