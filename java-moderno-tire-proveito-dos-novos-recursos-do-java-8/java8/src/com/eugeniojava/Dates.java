package com.eugeniojava;

import java.time.*;
import java.time.format.DateTimeFormatter;

public class Dates {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println(today);

        LocalDate myGraduation = LocalDate.of(2022, Month.DECEMBER, 31);
        int years = myGraduation.getYear() - today.getYear();
        System.out.println(years);

        Period period = Period.between(today, myGraduation);

        LocalDate nextGraduation = myGraduation.plusYears(5);
        System.out.println(nextGraduation);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        String formattedValue = nextGraduation.format(formatter);
        System.out.println(formattedValue);

        DateTimeFormatter formatterIncludingHours =
                DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm");
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now.format(formatterIncludingHours));

        LocalTime interval = LocalTime.of(15, 30);
        System.out.println(interval);
    }
}
