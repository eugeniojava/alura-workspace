package com.eugeniojava.rh.service.taxation;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Promotion implements TaxableReadjustment {

    private BigDecimal amount;
    private LocalDate date;

    public Promotion(BigDecimal amount, LocalDate date) {
        this.amount = amount;
        this.date = date;
    }

    @Override
    public BigDecimal amount() {
        return amount;
    }

    @Override
    public LocalDate date() {
        return date;
    }

    @Override
    public BigDecimal incomeTaxAmount() {
        return amount.multiply(new BigDecimal("0.1"));
    }
}
