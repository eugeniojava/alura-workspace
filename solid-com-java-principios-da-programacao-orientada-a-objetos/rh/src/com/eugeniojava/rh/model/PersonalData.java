package com.eugeniojava.rh.model;

import java.math.BigDecimal;

public class PersonalData {

    private String name;
    private String document;
    private Role role;
    private BigDecimal salary;

    public PersonalData(String name, String document, Role role,
                        BigDecimal salary) {
        this.name = name;
        this.document = document;
        this.role = role;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public String getDocument() {
        return document;
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
}
