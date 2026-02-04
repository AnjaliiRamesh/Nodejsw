public class three {
    public static void main(String[] args) {
        String str1 = "12345";
        String str2 = "01011";

        String result = "";
        for (int i = 0; i < str1.length(); i++) {   
            if(str2.charAt(i) == '1') {
                result += str1.charAt(i);
            }
     }
     System.out.println("Result: " + result);
}
} 