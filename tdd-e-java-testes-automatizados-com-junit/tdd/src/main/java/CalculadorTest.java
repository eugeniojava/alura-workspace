import org.junit.Assert;
import org.junit.jupiter.api.Test;

public class CalculadorTest {

    @Test
    public void shouldSumTwoPositiveNumbers() {
        Calculator calculator = new Calculator();

        int sum = calculator.sum(3, 7);

        Assert.assertEquals(12, sum);
    }
}
