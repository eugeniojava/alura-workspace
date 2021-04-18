package com.eugeniojava.rh.service.readjustment;

import com.eugeniojava.rh.ValidationException;
import com.eugeniojava.rh.model.Employee;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class ReadjustmentPeriodBetweenValidation
        implements ReadjustmentValidation {

    public void validate(Employee employee, BigDecimal increase) {
        LocalDate lastReadjustmentDate = employee.getLastReadjustmentDate();
        LocalDate currentDate = LocalDate.now();

        long monthsSinceLastReadjustment =
                ChronoUnit.MONTHS.between(lastReadjustmentDate, currentDate);
        if (monthsSinceLastReadjustment < 6) {
            throw new ValidationException("Interval between readjustments " +
                    "must be at least 6 months");
        }
    }
}
