package com.eugenioamn.forum.repository;

import com.eugenioamn.forum.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

    Course findByName(String name);
}
