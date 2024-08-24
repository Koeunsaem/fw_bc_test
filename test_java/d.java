package test_java;

import java.util.*;

public class d {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        while (a <= 0) {
            System.out.println("X");
            a = scanner.nextInt();
        }

        int sum = 0;
        for (int i = 0; i <= a; i++) {
            sum += i;
        }
        System.out.println(sum);
        scanner.close();
    }
}
