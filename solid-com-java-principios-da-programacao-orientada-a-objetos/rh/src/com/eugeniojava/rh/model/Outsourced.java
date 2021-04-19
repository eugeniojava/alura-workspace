package com.eugeniojava.rh.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Outsourced {

    private PersonalData personalData;
    private String company;

    public Outsourced(String name, String document, Role role,
                      BigDecimal salary, String company) {
        this.personalData = new PersonalData(name, document, role, salary);
        this.company = company;
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}
