package com.eugeniojava;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Course {
    
    private String name;
    private int students;

    public Course(String name, int students) {
        this.name = name;
        this.students = students;
    }

    public String getName() {
        return name;
    }

    public int getStudents() {
        return students;
    }
}

public class CoursesExample {

    public static void main(String[] args) {
        List<Course> courses = new ArrayList<Course>();

        courses.add(new Course("Python", 45));
        courses.add(new Course("JavaScript", 150));
        courses.add(new Course("Java 8", 113));
        courses.add(new Course("C", 55));

        courses.sort(Comparator.comparingInt(Course::getStudents));

        int sum = courses.stream()
                .filter(c -> c.getStudents() >= 100)
                .mapToInt(Course::getStudents)
                .sum();

        System.out.println(sum);
    }
}
