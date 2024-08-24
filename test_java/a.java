package test_java;

import java.util.Scanner;

public class a {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String temp = sc.next();

        char[] tempArr = temp.toCharArray();

        for (int i = tempArr.length; i > 0; i--) {
            System.out.print(tempArr[i - 1]);
        }

        sc.close();
    }

}