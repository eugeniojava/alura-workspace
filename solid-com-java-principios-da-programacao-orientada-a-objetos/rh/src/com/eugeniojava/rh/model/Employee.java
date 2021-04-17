package com.eugeniojava.rh.model;

import com.eugeniojava.rh.ValidationException;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;

public class Employee {

    private String name;
    private String document;
    private Role role;
    private BigDecimal salary;
    private LocalDate lastReadjustmentDate;

    public Employee(String name, String document, Role role,
                    BigDecimal salary) {
        this.name = name;
        this.document = document;
        this.role = role;
        this.salary = salary;
    }

    public void readjustSalary(BigDecimal increase) {
        BigDecimal readjustmentPercentage = increase.divide(salary,
                RoundingMode.HALF_UP);

        if (readjustmentPercentage.compareTo(new BigDecimal("0.4")) > 0) {
            throw new ValidationException("Readjustment cannot exceed 40% of " +
                    "the salary");
        }
        this.salary = this.salary.add(increase);
        this.lastReadjustmentDate = LocalDate.now();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    public LocalDate getLastReadjustmentDate() {
        return lastReadjustmentDate;
    }

    public void setLastReadjustmentDate(LocalDate lastReadjustmentDate) {
        this.lastReadjustmentDate = lastReadjustmentDate;
    }
}
