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

        Comparator<String> comparator = new SizeComparator();
//        Collections.sort(words, comparator);
        words.sort(comparator);
        System.out.println(words);

//        for (String w : words) {
//            System.out.println(w);
//        }

        Consumer<String> consumer = new PrintInline();
        words.forEach(consumer);
    }
}

class PrintInline implements Consumer<String> {

    @Override
    public void accept(String s) {
        System.out.println(s);
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
