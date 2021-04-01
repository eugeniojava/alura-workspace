package model;

import java.math.BigDecimal;

public enum Performance {

    TO_BE_DESIRED {
        @Override
        public BigDecimal readjustmentPercent() {
            return new BigDecimal("0.03");
        }
    },
    GOOD {
        @Override
        public BigDecimal readjustmentPercent() {
            return new BigDecimal("0.15");
        }
    },
    GREAT {
        @Override
        public BigDecimal readjustmentPercent() {
            return new BigDecimal("0.20");
        }
    };

    public abstract BigDecimal readjustmentPercent();
}
