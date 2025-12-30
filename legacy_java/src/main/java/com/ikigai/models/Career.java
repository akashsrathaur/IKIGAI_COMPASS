package com.ikigai.models;

public class Career {
    private String title;
    private String description;
    private String salaryRange;  // Added salary range
    private String careerGrowth; // Added future career growth

    // Constructor
    public Career(String title, String description, String salaryRange, String careerGrowth) {
        this.title = title;
        this.description = description;
        this.salaryRange = salaryRange;
        this.careerGrowth = careerGrowth;
    }

    
    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getSalaryRange() {
        return salaryRange;
    }

    public String getCareerGrowth() {
        return careerGrowth;
    }
}
