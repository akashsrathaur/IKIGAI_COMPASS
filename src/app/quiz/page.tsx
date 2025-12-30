"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '../../components/ProgressBar';
import QuestionCard from '../../components/QuestionCard';
import Button from '../../components/Button';

const STEPS = [
    {
        key: 'passion',
        question: "What do you love?",
        description: "Your PASSION is something you could do for hours without getting tired.",
        options: [
            { id: 'p1', label: 'Technology & Innovation', value: 'Technology' },
            { id: 'p2', label: 'Art, Design & Creativity', value: 'Art' },
            { id: 'p3', label: 'Helping Others & Empathy', value: 'Helping People' },
            { id: 'p4', label: 'Nature & Sustainability', value: 'Nature' },
            { id: 'p5', label: 'Solving Logic Puzzles', value: 'Logic' },
            { id: 'p6', label: 'Leading & Organizing', value: 'Business' },
        ]
    },
    {
        key: 'mission',
        question: "What does the world need?",
        description: "Your MISSION is how you contribute to a better future.",
        options: [
            { id: 'm1', label: 'Technological Advancement', value: 'Innovation' },
            { id: 'm2', label: 'Beauty & Expression', value: 'Design' },
            { id: 'm3', label: 'Health & Healing', value: 'Healthcare' },
            { id: 'm4', label: 'Environmental Protection', value: 'Sustainability' },
            { id: 'm5', label: 'Truth & Knowledge', value: 'Research' },
            { id: 'm6', label: 'Economic Growth', value: 'Money' },
        ]
    },
    {
        key: 'vocation',
        question: "What are you good at?",
        description: "Your VOCATION is where your natural talents lie.",
        options: [
            { id: 'v1', label: 'Coding & Engineering', value: 'Coding' },
            { id: 'v2', label: 'Visual Arts & Styling', value: 'Design' },
            { id: 'v3', label: 'Communication & Teaching', value: 'Communication' },
            { id: 'v4', label: 'Mathematics & Analysis', value: 'Math' },
            { id: 'v5', label: 'Strategy & Management', value: 'Strategy' },
            { id: 'v6', label: 'Hands-on & Building', value: 'Problem Solving' },
        ]
    },
    {
        key: 'profession',
        question: "What can you be paid for?",
        description: "Your PROFESSION is a viable career path that sustains you.",
        options: [
            { id: 'pr1', label: 'Software & Tech Roles', value: 'Technology' },
            { id: 'pr2', label: 'Creative Industry', value: 'Art' },
            { id: 'pr3', label: 'Medical & Social Work', value: 'Healthcare' },
            { id: 'pr4', label: 'Finance & Corporate', value: 'Business' },
            { id: 'pr5', label: 'Research & Academia', value: 'Research' },
            { id: 'pr6', label: 'Green Energy & Trades', value: 'Nature' },
        ]
    }
];

export default function QuizPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleSelect = (value: string) => {
        // Save answer
        const stepKey = STEPS[currentStep].key;
        const newAnswers = { ...answers, [stepKey]: value };
        setAnswers(newAnswers);

        // Navigate logic
        if (currentStep < STEPS.length - 1) {
            setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, 400); // Slight delay for visual feedback
        } else {
            // Finished
            const params = new URLSearchParams(newAnswers);
            router.push(`/result?${params.toString()}`);
        }
    };

    const stepData = STEPS[currentStep];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[#0f1115]">
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]"></div>

            <div className="w-full max-w-4xl z-10">
                <ProgressBar current={currentStep + 1} total={STEPS.length} />

                <div key={currentStep}> {/* Key forces re-mount for animation */}
                    <QuestionCard
                        question={stepData.question}
                        description={stepData.description}
                        options={stepData.options}
                        onSelect={handleSelect}
                        selected={answers[stepData.key]}
                    />
                </div>

                <div className="mt-8 text-center">
                    {currentStep > 0 && (
                        <Button variant="secondary" onClick={() => setCurrentStep(prev => prev - 1)}>
                            Back
                        </Button>
                    )}
                </div>
            </div>
        </main>
    );
}
