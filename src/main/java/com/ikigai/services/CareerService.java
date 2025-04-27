package com.ikigai.services;

import com.ikigai.models.Career;
import com.ikigai.models.User;

import java.util.ArrayList;
import java.util.List;

public class CareerService {

    public List<Career> suggestCareers(User user) {
        List<Career> careers = new ArrayList<>();

        // ✅ TECHNOLOGY & ENGINEERING
        if (user.getPassion().equalsIgnoreCase("Technology") || user.getSkills().contains("Programming")) {
            careers.add(new Career("Software Engineer", "Develops applications and systems.", "$80,000 - $150,000", "High"));
            careers.add(new Career("AI Researcher", "Works on artificial intelligence innovations.", "$100,000 - $200,000", "Very_High"));
            careers.add(new Career("Cybersecurity Expert", "Protects digital assets from cyber threats.", "$90,000 - $180,000", "High"));
            careers.add(new Career("Cloud Engineer", "Manages cloud-based infrastructure.", "$85,000 - $160,000", "High"));
        }

        // ✅ MEDICAL & HEALTHCARE
        if (user.getMission().equalsIgnoreCase("Helping People") || user.getPassion().equalsIgnoreCase("Medical")) {
            careers.add(new Career("Doctor", "Diagnoses and treats patients.", "$100,000 - $250,000", "Very High"));
            careers.add(new Career("Nurse", "Provides patient care in hospitals.", "$60,000 - $110,000", "High"));
            careers.add(new Career("Psychologist", "Provides mental health support.", "$70,000 - $120,000", "High"));
            careers.add(new Career("Pharmacist", "Dispenses medication and advises on drug safety.", "$80,000 - $130,000", "Medium"));
        }

        // ✅ EDUCATION & RESEARCH
        if (user.getPassion().equalsIgnoreCase("Teaching") || user.getMission().equalsIgnoreCase("Spreading Knowledge")) {
            careers.add(new Career("Professor", "Conducts research and teaches at universities.", "$70,000 - $150,000", "High"));
            careers.add(new Career("Education Consultant", "Advises institutions on curriculum development.", "$60,000 - $120,000", "Medium"));
            careers.add(new Career("School Principal", "Manages educational institutions.", "$90,000 - $140,000", "Medium"));
        }

        // ✅ BUSINESS & MANAGEMENT
        if (user.getPassion().equalsIgnoreCase("Business") || user.getSkills().contains("Leadership")) {
            careers.add(new Career("Entrepreneur", "Builds and grows their own business.", "Varies", "Very High"));
            careers.add(new Career("Marketing Manager", "Develops and executes marketing strategies.", "$70,000 - $140,000", "High"));
            careers.add(new Career("Investment Banker", "Manages financial investments.", "$100,000 - $250,000", "Very High"));
        }

        // ✅ ARTS & CREATIVITY
        if (user.getPassion().equalsIgnoreCase("Arts") || user.getSkills().contains("Creativity")) {
            careers.add(new Career("Graphic Designer", "Creates visual content for brands.", "$50,000 - $100,000", "Medium"));
            careers.add(new Career("Filmmaker", "Directs and produces films and media.", "$60,000 - $200,000", "High"));
            careers.add(new Career("Animator", "Creates animations for media and entertainment.", "$50,000 - $120,000", "Medium"));
        }

        // ✅ SPORTS & FITNESS
        if (user.getPassion().equalsIgnoreCase("Sports") || user.getSkills().contains("Athletics")) {
            careers.add(new Career("Professional Athlete", "Competes in sports professionally.", "$100,000 - Millions", "Varies"));
            careers.add(new Career("Sports Coach", "Trains and mentors athletes.", "$50,000 - $120,000", "Medium"));
            careers.add(new Career("Fitness Trainer", "Helps people stay fit and healthy.", "$40,000 - $100,000", "Medium"));
        }

        // ✅ LAW & GOVERNANCE
        if (user.getPassion().equalsIgnoreCase("Law") || user.getMission().equalsIgnoreCase("Justice")) {
            careers.add(new Career("Lawyer", "Provides legal representation and advice.", "$80,000 - $200,000", "High"));
            careers.add(new Career("Judge", "Interprets and enforces laws in court.", "$120,000 - $250,000", "Medium"));
            careers.add(new Career("Diplomat", "Represents a country in international affairs.", "$80,000 - $180,000", "High"));
        }

        // ✅ GENERAL CAREER OPTIONS
        if (careers.isEmpty()) {
            careers.add(new Career("Freelancer", "Works independently on various projects.", "Varies", "High"));
            careers.add(new Career("Content Creator", "Creates digital content for online platforms.", "Varies", "Medium"));
            careers.add(new Career("Consultant", "Provides expert advice in specialized fields.", "$60,000 - $200,000", "High"));
        }

        return careers;
    }
}
