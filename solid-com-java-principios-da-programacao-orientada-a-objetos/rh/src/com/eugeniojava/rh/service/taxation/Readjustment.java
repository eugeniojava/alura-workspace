package com.eugeniojava.rh.service.taxation;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface Readjustment {

    BigDecimal amount();
    LocalDate date();
}
