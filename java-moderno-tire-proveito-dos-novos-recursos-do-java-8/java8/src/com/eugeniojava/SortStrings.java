package com.eugeniojava;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;

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

        words.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));

        System.out.println(words);

        Consumer<String> consumer = s -> System.out.println(s);
        words.forEach(consumer);

        words.forEach(s -> System.out.println(s));
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
