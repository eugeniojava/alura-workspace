package com.eugeniojava.rh.service.readjustment;

import com.eugeniojava.rh.model.Employee;

import java.math.BigDecimal;
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
