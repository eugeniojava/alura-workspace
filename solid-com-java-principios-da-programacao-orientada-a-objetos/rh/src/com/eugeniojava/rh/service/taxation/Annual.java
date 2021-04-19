package com.eugeniojava.rh.service.taxation;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Annual implements Readjustment {

    private BigDecimal amount;
    private LocalDate date;

    public Annual(BigDecimal amount, LocalDate date) {
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
}
