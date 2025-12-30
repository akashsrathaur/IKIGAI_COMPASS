export interface Career {
    title: string;
    description: string;
    salary: string;
    growth: 'High' | 'Very High' | 'Medium' | 'Stable';
    matchScore: number; // 0-100
    tags: string[];
}

export const CAREERS: Career[] = [
    // TECHNOLOGY
    {
        title: "Software Engineer",
        description: "Architect and build the digital world using code.",
        salary: "$90,000 - $180,000",
        growth: "Very High",
        matchScore: 0,
        tags: ["Technology", "Coding", "Innovation", "Logic", "Problem Solving"]
    },
    {
        title: "AI Researcher",
        description: "Push the boundaries of artificial intelligence and machine learning.",
        salary: "$120,000 - $250,000",
        growth: "Very High",
        matchScore: 0,
        tags: ["Technology", "Math", "Innovation", "Research", "Future"]
    },
    {
        title: "UX/UI Designer",
        description: "Blend psychology and art to create intuitive digital experiences.",
        salary: "$80,000 - $140,000",
        growth: "High",
        matchScore: 0,
        tags: ["Art", "Design", "Technology", "Empathy", "Creativity"]
    },

    // HEALTHCARE
    {
        title: "Neurosurgeon",
        description: "Perform complex surgeries on the brain and nervous system.",
        salary: "$300,000 - $800,000",
        growth: "Stable",
        matchScore: 0,
        tags: ["Healthcare", "Helping People", "Science", "Precision", "High Pressure"]
    },
    {
        title: "Clinical Psychologist",
        description: "Help individuals navigate mental health challenges.",
        salary: "$70,000 - $120,000",
        growth: "High",
        matchScore: 0,
        tags: ["Healthcare", "Helping People", "Empathy", "Listening", "Analysis"]
    },

    // BUSINESS
    {
        title: "Product Manager",
        description: "Guide the success of a product and lead cross-functional teams.",
        salary: "$100,000 - $190,000",
        growth: "High",
        matchScore: 0,
        tags: ["Business", "Leadership", "Strategy", "Communication", "Technology"]
    },
    {
        title: "Venture Capitalist",
        description: "Invest in and mentor the next generation of startups.",
        salary: "$150,000+",
        growth: "High",
        matchScore: 0,
        tags: ["Business", "Money", "Innovation", "Risk", "Analysis"]
    },

    // CREATIVE
    {
        title: "Film Director",
        description: "Visualize and lead the artistic creation of films.",
        salary: "Varies widely",
        growth: "Medium",
        matchScore: 0,
        tags: ["Art", "Leadership", "Storytelling", "Vision", "Creativity"]
    },
    {
        title: "Environmental Architect",
        description: "Design sustainable buildings that harmonize with nature.",
        salary: "$70,000 - $130,000",
        growth: "High",
        matchScore: 0,
        tags: ["Design", "Nature", "Sustainability", "Logic", "Art"]
    }
];

export function getCareerSuggestions(
    passion: string,
    mission: string,
    vocation: string,
    profession: string
): Career[] {
    // Normalize inputs
    const inputs = [passion, mission, vocation, profession].map(s => s.toLowerCase());

    // Scoring logic
    const scoredCareers = CAREERS.map(career => {
        let score = 0;
        const careerTags = career.tags.map(t => t.toLowerCase());

        // Check for tag overlaps
        inputs.forEach(input => {
            // Direct match
            if (careerTags.includes(input)) {
                score += 25;
            }
            // Partial match or thematic match could be added here
            else {
                // Simple keyword matching for now
                careerTags.forEach(tag => {
                    if (input.includes(tag) || tag.includes(input)) {
                        score += 15;
                    }
                });
            }
        });

        return { ...career, matchScore: Math.min(score, 100) };
    });

    // Return top matches, sorted by score
    return scoredCareers
        .filter(c => c.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 4); // Top 4
}
