package com.eugeniojava.rh.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Employee {

    private PersonalData personalData;
    private LocalDate lastReadjustmentDate;

    public Employee(String name, String document, Role role,
                    BigDecimal salary) {
        this.personalData = new PersonalData(name, document, role, salary);
    }

    public void updateSalary(BigDecimal newSalary) {
        this.personalData.setSalary(newSalary);
        this.lastReadjustmentDate = LocalDate.now();
    }

    public void promote(Role newRole) {
        this.personalData.setRole(newRole);
    }

    public String getName() {
        return personalData.getName();
    }

    public String getDocument() {
        return personalData.getDocument();
    }

    public Role getRole() {
        return personalData.getRole();
    }

    public BigDecimal getSalary() {
        return personalData.getSalary();
    }

    public LocalDate getLastReadjustmentDate() {
        return lastReadjustmentDate;
    }
}
