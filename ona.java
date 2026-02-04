public class ona {

    public static void main(String[] args) {
        String str1 = "1234567890";
        String strEven = "";
        String strOdd = "";
        for (int i = 0; i < str1.length(); i++) {
            if (i % 2 == 0) {
                strEven += str1.charAt(i);
            }
            else{
                strOdd += str1.charAt(i);
            }
        }
        System.out.println("Even index characters: " + strEven);
        System.out.println("Odd index characters: " + strOdd);
        System.out.println("Combined: " + strEven + strOdd);
    }
} 