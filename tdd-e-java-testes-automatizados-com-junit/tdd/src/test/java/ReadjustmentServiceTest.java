import model.Employee;
import model.Performance;
import org.junit.jupiter.api.Test;
import service.ReadjustmentService;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ReadjustmentServiceTest {

    @Test
    void readjustmentShouldBe3PercentWhenPerformanceIsEqualToToBeDesired() {
        ReadjustmentService readjustmentService = new ReadjustmentService();
        Employee employee = new Employee(
                "John",
                LocalDate.now(),
                new BigDecimal("1000.00"));

        readjustmentService.getReadjustment(employee,
                Performance.TO_BE_DESIRED);

        assertEquals(new BigDecimal("1030.00"), employee.getSalary());
    }

    @Test
    void readjustmentShouldBe15PercentWhenPerformanceIsEqualToGood() {
        ReadjustmentService readjustmentService = new ReadjustmentService();
        Employee employee = new Employee(
                "John",
                LocalDate.now(),
                new BigDecimal("5000.00"));

        readjustmentService.getReadjustment(employee,
                Performance.GOOD);

        assertEquals(new BigDecimal("5750.00"), employee.getSalary());
    }

    @Test
    void readjustmentShouldBe20PercentWhenPerformanceIsEqualToGreat() {
        ReadjustmentService readjustmentService = new ReadjustmentService();
        Employee employee = new Employee(
                "John",
                LocalDate.now(),
                new BigDecimal("8000.00"));

        readjustmentService.getReadjustment(employee,
                Performance.GREAT);

        assertEquals(new BigDecimal("9600.00"), employee.getSalary());
    }
}
