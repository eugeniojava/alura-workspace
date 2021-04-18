package com.eugeniojava.rh.service;

import com.eugeniojava.rh.ValidationException;
import com.eugeniojava.rh.model.Employee;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

public class ReadjustmentService {

    private List<ReadjustmentValidation> validations;

    public ReadjustmentService(List<ReadjustmentValidation> validations) {
        this.validations = validations;
    }

    public void readjustEmployeesSalary(Employee employee,
                                        BigDecimal increase) {
        validations.forEach(v -> v.validate(employee, increase));

        BigDecimal newSalary = employee.getSalary().add(increase);
        employee.updateSalary(newSalary);
    }
}
