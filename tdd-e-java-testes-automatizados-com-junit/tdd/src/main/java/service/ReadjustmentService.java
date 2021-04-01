package service;

import model.Employee;
import model.Performance;

import java.math.BigDecimal;

public class ReadjustmentService {

    public void getReadjustment(Employee employee, Performance performance) {
        String percentage;

        if (performance == Performance.TO_BE_DESIRED) {
            percentage = "0.03";
        } else if (performance == Performance.GOOD) {
            percentage = "0.15";
        } else {
            percentage = "0.20";
        }
        BigDecimal readjustment = employee
                .getSalary()
                .multiply(new BigDecimal(percentage));
        employee.readjustSalary(readjustment);
    }
}
