package test_java;

import java.util.*;

public class e {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int year = scanner.nextInt();
        int month = scanner.nextInt();
        if (month == 2) {
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                System.out.println("29");
            } else {
                System.out.println("28");
            }
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            System.out.println("30");
        } else {
            System.out.println("31");
        }
        scanner.close();
    }
}
