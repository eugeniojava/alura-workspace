package com.eugeniojava.rh.service;

import com.eugeniojava.rh.model.Employee;

import java.math.BigDecimal;

public interface ReadjustmentValidation {

    void validate(Employee employee, BigDecimal increase);
}
