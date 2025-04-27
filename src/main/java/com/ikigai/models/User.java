package com.ikigai.models;

import java.util.List;

public class User {
    private String passion;
    private String mission;
    private List<String> skills;
    private String values;  // Added personal values (e.g., Innovation, Creativity)
    private String personalityType; // Added (e.g., Introvert, Extrovert)
    private String educationLevel; // Added (e.g., Bachelor's, Master's)

    // Constructor
    public User(String passion, String mission, List<String> skills, String values, String personalityType, String educationLevel) {
        this.passion = passion;
        this.mission = mission;
        this.skills = skills;
        this.values = values;
        this.personalityType = personalityType;
        this.educationLevel = educationLevel;
    }

    // Getter methods
    public String getPassion() {
        return passion;
    }

    public String getMission() {
        return mission;
    }

    public List<String> getSkills() {
        return skills;
    }

    public String getValues() {
        return values;
    }

    public String getPersonalityType() {
        return personalityType;
    }

    public String getEducationLevel() {
        return educationLevel;
    }

    
    public void setPassion(String passion) {
        this.passion = passion;
    }

    public void setMission(String mission) {
        this.mission = mission;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public void setValues(String values) {
        this.values = values;
    }

    public void setPersonalityType(String personalityType) {
        this.personalityType = personalityType;
    }

    public void setEducationLevel(String educationLevel) {
        this.educationLevel = educationLevel;
    }
}
