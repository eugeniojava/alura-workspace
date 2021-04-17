package com.eugeniojava.rh.service;

import com.eugeniojava.rh.ValidationException;
import com.eugeniojava.rh.model.Employee;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;

public class ReadjustmentService {

    public void readjustEmployeesSalary(Employee employee,
                                        BigDecimal increase) {
        BigDecimal currentSalary = employee.getSalary();

        BigDecimal readjustmentPercentage = increase.divide(currentSalary,
                RoundingMode.HALF_UP);
        if (readjustmentPercentage.compareTo(new BigDecimal("0.4")) > 0) {
            throw new ValidationException("Readjustment cannot exceed 40% of " +
                    "the salary");
        }
        BigDecimal newSalary = currentSalary.add(increase);
        employee.updateSalary(newSalary);
    }
}
