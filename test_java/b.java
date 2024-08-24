package test_java;

import java.util.*;

public class b {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String temp = sc.next();
        char userIn = temp.charAt(0);

        char[] correct = { 'a', 'e', 'i', 'o', 'u' };

        for (char i : correct) {
            if (userIn == i) {
                System.out.println("O");
                sc.close();
                return;
            } else {
                continue;
            }
        }
        System.out.println("X");
        sc.close();
    }
}