import model.Employee;
import model.Performance;
import org.junit.jupiter.api.*;
import service.ReadjustmentService;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ReadjustmentServiceTest {

    private ReadjustmentService readjustmentService;
    private Employee employee;

    @BeforeEach
    public void initialize() {
        System.out.println("Initializing...");
        readjustmentService = new ReadjustmentService();
        employee = new Employee(
                "John",
                LocalDate.now(),
                new BigDecimal("1000.00"));
    }

    @AfterEach
    public void finish() {
        System.out.println("Finishing...");
    }

    @BeforeAll
    public static void beforeAll() {
        System.out.println("Before all");
    }

    @AfterAll
    public static void afterAll() {
        System.out.println("After all");
    }

    @Test
    void readjustmentShouldBe3PercentWhenPerformanceIsEqualToToBeDesired() {
        readjustmentService.getReadjustment(employee,
                Performance.TO_BE_DESIRED);

        assertEquals(new BigDecimal("1030.00"), employee.getSalary());
    }

    @Test
    void readjustmentShouldBe15PercentWhenPerformanceIsEqualToGood() {
        readjustmentService.getReadjustment(employee,
                Performance.GOOD);

        assertEquals(new BigDecimal("1150.00"), employee.getSalary());
    }

    @Test
    void readjustmentShouldBe20PercentWhenPerformanceIsEqualToGreat() {
        readjustmentService.getReadjustment(employee,
                Performance.GREAT);

        assertEquals(new BigDecimal("1200.00"), employee.getSalary());
    }
}
