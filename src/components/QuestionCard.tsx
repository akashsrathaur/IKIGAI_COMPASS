import React from 'react';
import Card from './Card';
import Button from './Button';

interface Option {
    id: string;
    label: string;
    value: string;
}

interface QuestionCardProps {
    question: string;
    description?: string;
    options: Option[];
    onSelect: (value: string) => void;
    selected?: string;
}

export default function QuestionCard({ question, description, options, onSelect, selected }: QuestionCardProps) {
    return (
        <div className="animate-fade-in">
            <h2 className="question-title">{question}</h2>
            {description && <p className="description">{description}</p>}

            <div className="options-grid">
                {options.map((option, index) => (
                    <div
                        key={option.id}
                        className={`option-card ${selected === option.value ? 'selected' : ''}`}
                        onClick={() => onSelect(option.value)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="option-label">{option.label}</span>
                        {selected === option.value && (
                            <div className="check-icon">✓</div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .question-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #fff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .description {
          text-align: center;
          color: #94a3b8;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        .option-card {
          position: relative;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: fadeIn 0.5s ease-out backwards;
        }
        .option-card:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px -5px rgba(0,0,0,0.3);
        }
        .option-card.selected {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 41, 59, 0.8));
          border-color: var(--primary);
          box-shadow: 0 0 0 1px var(--primary), 0 8px 30px -10px var(--primary-glow);
        }
        .option-label {
          font-size: 1.1rem;
          font-weight: 500;
          color: #e2e8f0;
        }
        .check-icon {
          color: var(--primary);
          font-weight: bold;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
