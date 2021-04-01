package service;

import model.Employee;
import model.Performance;

import java.math.BigDecimal;

public class ReadjustmentService {

    public void getReadjustment(Employee employee, Performance performance) {
        BigDecimal readjustment = employee
                .getSalary()
                .multiply(performance.readjustmentPercent());

        employee.readjustSalary(readjustment);
    }
}
