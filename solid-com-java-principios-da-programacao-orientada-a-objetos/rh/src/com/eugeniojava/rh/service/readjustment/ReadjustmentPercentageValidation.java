package com.eugeniojava.rh.service.readjustment;

import com.eugeniojava.rh.ValidationException;
import com.eugeniojava.rh.model.Employee;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class ReadjustmentPercentageValidation
        implements ReadjustmentValidation {

    public void validate(Employee employee, BigDecimal increase) {
        BigDecimal currentSalary = employee.getSalary();

        BigDecimal readjustmentPercentage = increase.divide(currentSalary,
                RoundingMode.HALF_UP);
        if (readjustmentPercentage.compareTo(new BigDecimal("0.4")) > 0) {
            throw new ValidationException("Readjustment cannot exceed 40% of " +
                    "the salary");
        }
    }
}
