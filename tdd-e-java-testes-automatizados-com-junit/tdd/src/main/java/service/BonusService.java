package service;

import model.Employee;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class BonusService {

    public BigDecimal calculateBonus(Employee employee) {
        BigDecimal amount = employee
                .getSalary()
                .multiply(new BigDecimal("0.1"));

        if (amount.compareTo(new BigDecimal("1000")) > 0) {
            amount = BigDecimal.ZERO;
        }

        return amount.setScale(2, RoundingMode.HALF_UP);
    }
}
