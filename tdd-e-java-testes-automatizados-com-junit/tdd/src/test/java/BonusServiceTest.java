import model.Employee;
import org.junit.jupiter.api.Test;
import service.BonusService;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class BonusServiceTest {

    @Test
    void bonusShouldBeZeroForEmployeeWithVeryHighSalary() {
        BonusService bonusService = new BonusService();

//        assertThrows(IllegalArgumentException.class,
//                () -> bonusService.calculateBonus(new Employee(
//                        "Eugênio",
//                        LocalDate.now(),
//                        new BigDecimal("25000")))
//        );
        try {
            bonusService.calculateBonus(new Employee(
                    "Eugênio",
                    LocalDate.now(),
                    new BigDecimal("25000")));
            fail("Exception did not work!");
        } catch (Exception e) {
            assertEquals("Employee with salary greater than 10000" +
                    " can not receive a bonus", e.getMessage());
        }
    }

    @Test
    void bonusShouldBe10PercentOfSalary() {
        BonusService bonusService = new BonusService();
        BigDecimal bonus = bonusService.calculateBonus(
                new Employee("Eugênio",
                        LocalDate.now(),
                        new BigDecimal("2500")));

        assertEquals(new BigDecimal("250.00"), bonus);
    }

    @Test
    void bonusShouldBe10PercentForASalaryOfExactly10000() {
        BonusService bonusService = new BonusService();
        BigDecimal bonus = bonusService.calculateBonus(
                new Employee("Eugênio",
                        LocalDate.now(),
                        new BigDecimal("10000")));

        assertEquals(new BigDecimal("1000.00"), bonus);
    }
}
