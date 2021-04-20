package com.eugeniojava;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;

public class SortStrings {

    public static void main(String[] args) {
        List<String> words = new ArrayList<String>();

        words.add("Alura");
        words.add("Casa do Código");
        words.add("Caelum");

        words.sort((s1, s2) -> {
            if (s1.length() < s2.length()) return -1;
            if (s1.length() > s2.length()) return 1;
            return 0;
        });

//        words.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));

        words.sort(Comparator.comparing(s -> s.length()));
        words.sort(Comparator.comparing(String::length));

        Function<String, Integer> function = String::length;
        Function<String, Integer> function2 = s -> s.length();

        Comparator<String> comparator = Comparator.comparing(function);
        words.sort(comparator);

        System.out.println(words);

        Consumer<String> consumer = System.out::println;
        words.forEach(consumer);

        words.forEach(System.out::println);
    }
}

class SizeComparator implements Comparator<String> {

    @Override
    public int compare(String s1, String s2) {
        if (s1.length() < s2.length()) return -1;
        if (s1.length() > s2.length()) return 1;
        return 0;
    }
}
