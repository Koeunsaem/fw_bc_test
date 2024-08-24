package test_java;

import java.util.*;

public class c {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int age = sc.nextInt();
        int height = sc.nextInt();

        System.out.println(age < 14 && height < 160 ? "O" : "X");

        sc.close();
    }
}